import React, { Component } from "react";
import web3 from "../../web3/web3";
import { CONTRACT_ABI } from "../../web3/abi";
import { CONTRACT_ADDRESS_ROPSTEN } from "../../web3/address";

const ORDER_TYPE = ["BUY", "SELL"];
export default class OpenOrders extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      errorMessage: "",
      ordersList: null
    };
  }

  componentDidMount() {
    this.getOrdersList();
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
        order[4],
        order[5]
      ];
    });
    this.setState({ ordersList: processedOrdersList });
    console.log("open orders", processedOrdersList);
  }

  fillOrder = async order => {
    const trader = order[0];
    const position = order[1];
    const qty = order[2];
    const price = web3.utils.toWei(order[3], "ether");
    const expiry = order[4];

    const { account } = this.props;
    const contract = new web3.eth.Contract(
      CONTRACT_ABI.abi,
      CONTRACT_ADDRESS_ROPSTEN
    );
    if (ORDER_TYPE[position] === "BUY") {
      await contract.methods
        .fillOrder(trader, account, qty, price, expiry)
        .send({
          value: qty * price,
          from: account,
          gas: 3000000
        });
    } else if (ORDER_TYPE[position] === "SELL") {
      await contract.methods
        .fillOrder(account, trader, qty, price, expiry)
        .send({
          value: qty * price,
          from: account,
          gas: 3000000
        });
    }
  };

  render() {
    const { ordersList } = this.state;
    if (!ordersList)
      return (
        <div className="card text-center" style={{ minHeight: "500px" }}>
          <div className="card-body">
            <div className="spinner-border mt-5" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      );
    return (
      <div className="card" style={{ minHeight: "500px" }}>
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
              {ordersList.filter(order => order[5] === false).length === 0 && (
                <tr className="text-center mt-3">
                  <td colSpan={6}>No open orders found. Please create one.</td>
                </tr>
              )}
              {ordersList.map(
                (order, index) =>
                  !order[5] && (
                    <tr key={index} style={{ fontSize: "18px" }}>
                      <td className="align-middle">{order[0]}</td>
                      <td className="align-middle">{ORDER_TYPE[order[1]]}</td>
                      <td className="align-middle">{order[2]}</td>
                      <td className="align-middle">{order[3]} ETH</td>
                      <td className="align-middle">2019-12-11</td>
                      <td className="align-middle">
                        <button
                          onClick={() => this.fillOrder(order)}
                          className="btn btn-primary"
                        >
                          FILL ORDER
                        </button>
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
