import React, { Component } from "react";
import web3 from "../../web3/web3";
import { CONTRACT_ABI } from "../../web3/abi";
import { CONTRACT_ADDRESS_ROPSTEN } from "../../web3/address";

export default class OpenOrders extends Component {
  constructor() {
    super();

    this.state = {
      account: null,
      loading: false,
      errorMessage: "",
      ordersList: []
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
        web3.utils.fromWei(order[2], "ether"),
        order[3],
        order[4]
      ];
    });
    this.setState({ ordersList: processedOrdersList });
    console.log("open orders", processedOrdersList);
  }

  render() {
    return (
      <div className="card" style={{ minHeight: "400px" }}>
        <div className="card-body">
          <h5 className="card-title">Open Orders</h5>
          <p className="card-text">
            Submitted orders that are yet to be filled.
          </p>

          <table className="table table-info table-hover">
            <thead className="thead-dark">
              <tr>
                <th>ADDRESS</th>
                <th>SIDE</th>
                <th>QUANTITY</th>
                <th>PRICE</th>
                <th>EXPIRY</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="align-middle">
                  0xca35b7d915458ef540ade6068dfe2f44e8fa733c
                </td>
                <td className="align-middle">SELL/SHORT</td>
                <td className="align-middle">5</td>
                <td className="align-middle">0.2 ETH</td>
                <td className="align-middle">2019-12-31</td>
                <td className="align-middle">
                  <button className="btn btn-primary">FILL ORDER</button>
                </td>
              </tr>
              <tr>
                <td>0xca35b7d915458ef540ade6068dfe2f44e8fa733c</td>
                <td>BUY/LONG</td>
                <td>5</td>
                <td>0.2 ETH</td>
                <td>2019-12-31</td>
                <td>
                  <button className="btn btn-primary">FILL ORDER</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
