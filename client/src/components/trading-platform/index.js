import React, { Component } from "react";
import Navbar from "./navbar";
import MarketGraph from "./market-graph";
import TemperatureGraph from "./temperature-graph";
import OpenOrders from "./open-orders";
import OrderBook from "./order-book";
import OrderPosition from "./order-position";

export default class TradingPlatform extends Component {
  constructor() {
    super();
    this.state = { account: null };
  }
  componentDidMount() {
    this.initialize();
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
  render() {
    const { account } = this.state;
    return (
      <div className="container-fluid">
        <Navbar />
        <div className="row my-3">
          <div className="col-12 col-md-6">
            <MarketGraph />
          </div>
          <div className="col-12 col-md-6">
            <TemperatureGraph />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-12 col-md-8">
            <OpenOrders account={account} />
          </div>
          <div className="col-12 col-md-4">
            <OrderPosition account={account} />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-12 col-md-12">
            <OrderBook account={account} />
          </div>
        </div>
      </div>
    );
  }
}
