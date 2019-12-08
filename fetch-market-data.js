const fetch = require("node-fetch");
const fs = require("fs");
require("dotenv").config();

fetch(
  `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SP&apikey=${process.env.API_KEY}`
)
  .then(res => res.json())
  .then(data => {
    const timeseries = data["Time Series (Daily)"];
    const json = Object.keys(data["Time Series (Daily)"]).map(date => {
      const open = (timeseries[date]["1. open"] * 100 - 1000)
        .toFixed(2)
        .toString();
      const high = (timeseries[date]["2. high"] * 100 - 1000)
        .toFixed(2)
        .toString();
      const low = (timeseries[date]["3. low"] * 100 - 1000)
        .toFixed(2)
        .toString();
      const close = (timeseries[date]["4. close"] * 100 - 1000)
        .toFixed(2)
        .toString();
      return {
        x: date,
        y: [
          open > 2800 ? (open - 400).toString() : open,
          high > 2800 ? (high - 400).toString() : high,
          low > 2800 ? (low - 400).toString() : low,
          close > 2800 ? (close - 400).toString() : close
        ]
      };
    });
    fs.writeFile("data.json", JSON.stringify(json.reverse()), err => {
      if (err) throw err;
      console.log("Written to data.json");
    });
  })
  .catch(err => console.log(err.message));
