import React, { Component } from "react";
import web3 from "../../web3/web3";
import { CONTRACT_ABI } from "../../web3/abi";
import { CONTRACT_ADDRESS_ROPSTEN } from "../../web3/address";

export default class OrderPosition extends Component {
  constructor() {
    super();

    this.state = {
      buyQty: "",
      sellQty: ""
    };
  }

  onBuy = async event => {
    event.preventDefault();
    const { buyQty } = this.state;
    const { account } = this.props;
    const priceInWei = web3.utils.toWei("0.2", "ether");
    const expiry = Date.parse("December 31, 2019");
    console.log(expiry);

    const contract = new web3.eth.Contract(
      CONTRACT_ABI.abi,
      CONTRACT_ADDRESS_ROPSTEN
    );

    await contract.methods.submitOrder(0, buyQty, priceInWei, expiry).send({
      value: buyQty * priceInWei,
      from: account,
      gas: 3000000
    });
  };

  onSell = async event => {
    event.preventDefault();
    const { sellQty, account } = this.props;

    const priceInWei = web3.utils.toWei("0.2", "ether");
    const expiry = Date.parse("December 11, 2019");

    const contract = new web3.eth.Contract(
      CONTRACT_ABI.abi,
      CONTRACT_ADDRESS_ROPSTEN
    );

    await contract.methods.submitOrder(1, sellQty, priceInWei, expiry).send({
      value: sellQty * priceInWei,
      from: account,
      gas: 3000000
    });
  };
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Position</h5>
          <p className="card-text">
            Long trader thinks HDD > 0 and Short trader thinks HDD = 0
          </p>
          <div className="row justify-content-center my-3">
            <div className="col-12 col-md-3">
              <label className="text-left">Price</label>
              <input
                className="form-control"
                type="text"
                readOnly
                value="20 ETH"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <form>
                <div className="form-group text-center ">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Order Qty"
                    value={this.state.buyQty}
                    onChange={e => this.setState({ buyQty: e.target.value })}
                  />
                  <div className="d-flex justify-content-between mt-2">
                    <p>Margin:</p>
                    <p>1%</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Order Value:</p>
                    <p>{this.state.buyQty * 0.2} ETH</p>
                  </div>
                  <button
                    type="submit"
                    onClick={this.onBuy}
                    className="btn btn-success mt-3 px-5"
                  >
                    BUY/LONG
                  </button>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-6">
              <form onSubmit={this.onSell}>
                <div className="form-group text-center ">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Order Qty"
                    value={this.state.sellQty}
                    onChange={e => this.setState({ sellQty: e.target.value })}
                  />
                  <div className="d-flex justify-content-between mt-2">
                    <p>Margin:</p>
                    <p>1%</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Order Value:</p>
                    <p>{this.state.sellQty * 0.2} ETH</p>
                  </div>
                  <button
                    type="submit"
                    onClick={this.onSell}
                    className="btn btn-danger mt-3 px-5"
                  >
                    SELL/SHORT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
