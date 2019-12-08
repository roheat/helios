import React, { Component } from "react";
import web3 from "../../web3/web3";
import { CONTRACT_ABI } from "../../web3/abi";
import { CONTRACT_ADDRESS_ROPSTEN } from "../../web3/address";

export default class OrderBook extends Component {
  constructor() {
    super();

    this.state = {
      account: null,
      loading: false,
      errorMessage: "",
      futuresList: []
    };
  }

  componentDidMount() {
    this.initialize();
    this.getFuturesList();
  }

  async initialize() {
    try {
      const [account] = await window.ethereum.enable();
      this.setState({ account });
    } catch (error) {
      console.log(error);
      this.setState({
        errorMessage:
          "Error connectin to Metamask! Please try reloading the page..."
      });
    }
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

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Order Book</h5>
          <p className="card-text">List of all filled orders.</p>

          <table className="table table-striped table-dark table-hover">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>BUY/LONG ADDRESS</th>
                <th>SELL/SHORT ADDRESS</th>
                <th>QUANTITY</th>
                <th>PRICE</th>
                <th>TOTAL AMOUNT</th>
                <th>EXPIRY</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="align-middle">1</td>
                <td className="align-middle">
                  0xca35b7d915458ef540ade6068dfe2f44e8fa733c
                </td>
                <td className="align-middle">
                  0x14723a09acff6d2a60dcdf7aa4aff308fddc160c
                </td>
                <td className="align-middle">5</td>
                <td className="align-middle">0.2 ETH</td>
                <td className="align-middle">1.0 ETH</td>
                <td className="align-middle">2019-12-31</td>
                <td className="align-middle">
                  <button className="btn btn-success">SQUARE OFF</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>0xca35b7d915458ef540ade6068dfe2f44e8fa733c</td>
                <td>0x14723a09acff6d2a60dcdf7aa4aff308fddc160c</td>
                <td>5</td>
                <td>0.2 ETH</td>
                <td>1.0 ETH</td>
                <td>2019-12-31</td>
                <td>
                  <button className="btn btn-success">SQUARE OFF</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
