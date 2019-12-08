import React, { Component } from "react";
import Navbar from "./navbar";
import MarketGraph from "./market-graph";
import TemperatureGraph from "./temperature-graph";

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
      </div>
    );
  }
}
