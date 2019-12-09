import React, { Component } from "react";
import web3 from "../../web3/web3";
import { CONTRACT_ABI, ORACLE_ABI } from "../../web3/abi";
import {
  CONTRACT_ADDRESS_ROPSTEN,
  ORACLE_ADDRESS_ROPSTEN
} from "../../web3/address";
import Modal from "react-bootstrap/Modal";

export default class OrderBook extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      errorMessage: "",
      futuresList: null,
      avgTemp: "",
      show: false
    };
  }

  componentDidMount() {
    this.getFuturesList();
    this.getAverageTemperature();
  }

  async getFuturesList() {
    const contract = new web3.eth.Contract(
      CONTRACT_ABI.abi,
      CONTRACT_ADDRESS_ROPSTEN
    );

    const lastFutureId = await contract.methods.getLatestFutureID().call();
    let futuresList = [];
    for (let id = 1; id < lastFutureId; id++) {
      const futureDetail = await contract.methods.getFutureDetails(id).call();
      futuresList.push(futureDetail);
    }
    const processedFuturesList = futuresList.map(future => {
      return [
        future[0],
        future[1],
        future[2],
        web3.utils.fromWei(future[3], "ether"),
        future[4]
      ];
    });
    this.setState({ futuresList: processedFuturesList });
    console.log("filled orders", processedFuturesList);
  }

  async getAverageTemperature() {
    const contract = new web3.eth.Contract(ORACLE_ABI, ORACLE_ADDRESS_ROPSTEN);

    const avgTemp = await contract.methods.avgTemp().call();
    this.setState({ avgTemp });
  }

  async squareOff(id) {
    const { account } = this.props;
    const contract = new web3.eth.Contract(
      CONTRACT_ABI.abi,
      CONTRACT_ADDRESS_ROPSTEN
    );

    await contract.methods.squareOffOrder(id).send({
      from: account,
      gas: 3000000
    });
  }

  showModal = () => {
    this.setState({ show: true });
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { futuresList, show, avgTemp } = this.state;
    if (!futuresList)
      return (
        <div className="card text-center" style={{ minHeight: "400px" }}>
          <div className="card-body">
            <div className="spinner-border mt-5" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      );
    return (
      <div className="card" style={{ minHeight: "400px" }}>
        <div className="card-body">
          <h5 className="card-title">Order Book</h5>
          <p className="card-text">List of all filled orders.</p>

          <table className="table table-striped table-dark table-hover">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>BUY/LONG ADDRESS</th>
                <th>SELL/SHORT ADDRESS</th>
                <th>QTY</th>
                <th>PRICE</th>
                <th>TOTAL AMOUNT</th>
                <th>EXPIRY</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {futuresList.map((future, index) => (
                <tr key={index}>
                  <td className="align-middle">{index + 1}</td>
                  <td className="align-middle">{future[0]}</td>
                  <td className="align-middle">{future[1]}</td>
                  <td className="align-middle">{future[2]}</td>
                  <td className="align-middle">{future[3]} ETH</td>
                  <td className="align-middle">{future[2] * future[3]} ETH</td>
                  <td className="align-middle">2019-12-31</td>
                  <td className="align-middle">
                    <button
                      onClick={() => this.squareOff(index + 1)}
                      className="btn btn-success"
                    >
                      SQUARE OFF
                    </button>
                    <button
                      className="btn btn-warning ml-2"
                      onClick={this.showModal}
                    >
                      Info
                    </button>
                    <Modal
                      size="lg"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={show}
                      onHide={this.closeModal}
                    >
                      <Modal.Body>
                        <h3 className="mt-5 text-center">
                          Average Temperature: {avgTemp}°C
                        </h3>
                        <h4 className="my-3 text-center">
                          Settlement Price: (18 - {avgTemp}) x 0.003 ={" "}
                          {(18 - avgTemp) * 0.003} ETH
                        </h4>
                      </Modal.Body>
                      <Modal.Footer>
                        <button
                          className="btn btn-dark"
                          onClick={this.closeModal}
                        >
                          Close
                        </button>
                      </Modal.Footer>
                    </Modal>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
