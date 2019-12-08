import React, { Component } from "react";
import Chart from "react-apexcharts";
import rawTempData from "../../data/raw-temp";

export default class Graph extends Component {
  constructor() {
    super();
    const DateArray = rawTempData.map(data => {
      return data[0];
    });
    const TMAXData = rawTempData.map(data => {
      return data[1];
    });
    const TMINData = rawTempData.map(data => {
      return data[2];
    });
    this.state = {
      options: {
        title: {
          text: "New York Temperature",
          align: "left"
        },
        chart: {
          height: 600,
          type: "area"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        xaxis: {
          type: "datetime",
          categories: DateArray
        },
        tooltip: {
          x: {
            format: "dd/MM/yy"
          }
        },
        theme: {
          mode: "light"
        }
      },
      series: [
        {
          name: "TMAX",
          data: TMAXData
        },
        {
          name: "TMIN",
          data: TMINData
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height="600"
        />
      </div>
    );
  }
}
