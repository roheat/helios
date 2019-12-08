import React, { Component } from "react";
import web3 from "../../web3/web3";
import { CONTRACT_ABI } from "../../web3/abi";
import { CONTRACT_ADDRESS_ROPSTEN } from "../../web3/address";

const ORDER_TYPE = ["BUY", "SELL"];
export default class OpenOrders extends Component {
  constructor() {
    super();

    this.state = {
      account: null,
      loading: false,
      errorMessage: "",
      ordersList: null
    };
  }

  componentDidMount() {
    this.initialize();
    this.getOrdersList();
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

  async getOrdersList() {
    const contract = new web3.eth.Contract(
      CONTRACT_ABI.abi,
      CONTRACT_ADDRESS_ROPSTEN
    );

    const lastOrderId = await contract.methods.getLatestOrderID().call();
    let ordersList = [];
    for (let id = 1; id < lastOrderId; id++) {
      const orderDetail = await contract.methods.getOrderDetails(id).call();
      ordersList.push(orderDetail);
    }
    const processedOrdersList = ordersList.map(order => {
      return [
        order[0],
        order[1],
        order[2],
        web3.utils.fromWei(order[3], "ether"),
        order[4]
      ];
    });
    this.setState({ ordersList: processedOrdersList });
    console.log("open orders", processedOrdersList);
  }

  render() {
    const { ordersList } = this.state;
    if (!ordersList)
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
          <h5 className="card-title">Open Orders</h5>
          <p className="card-text">
            Submitted orders that are yet to be filled.
          </p>

          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>ADDRESS</th>
                <th>SIDE</th>
                <th>QTY</th>
                <th>PRICE</th>
                <th>EXPIRY</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {ordersList.map(
                (order, index) =>
                  !order[4] && (
                    <tr key={index}>
                      <td className="align-middle">{order[0]}</td>
                      <td className="align-middle">{ORDER_TYPE[order[1]]}</td>
                      <td className="align-middle">{order[2]}</td>
                      <td className="align-middle">{order[3]} ETH</td>
                      <td className="align-middle">2019-12-31</td>
                      <td className="align-middle">
                        <button className="btn btn-primary">FILL ORDER</button>
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
