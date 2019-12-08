import React, { Component } from "react";
import Chart from "react-apexcharts";
import chartData from "../../data/marketdata.json";

export default class Graph extends Component {
  constructor() {
    super();

    this.state = {
      options: {
        title: {
          text: "S&P500 Futures",
          align: "left"
        },
        xaxis: {
          type: "datetime"
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        },
        theme: {
          mode: "light"
        }
      },
      series: [{ data: chartData }]
    };
  }
  render() {
    return (
      <div>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="candlestick"
          height="600"
        />
      </div>
    );
  }
}
