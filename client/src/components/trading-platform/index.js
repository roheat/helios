import React, { Component } from "react";
import Navbar from "./navbar";
import MarketGraph from "./market-graph";
import TemperatureGraph from "./temperature-graph";
import OpenOrders from "./open-orders";
import OrderBook from "./order-book";
import OrderPosition from "./order-position";

export default class TradingPlatform extends Component {
  render() {
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
            <OpenOrders />
          </div>
          <div className="col-12 col-md-4">
            <OrderPosition />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-12 col-md-12">
            <OrderBook />
          </div>
        </div>
      </div>
    );
  }
}
