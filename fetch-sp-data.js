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
      return {
        date: date,
        open: (timeseries[date]["1. open"] * 100).toFixed(2).toString(),
        high: (timeseries[date]["2. high"] * 100).toFixed(2).toString(),
        low: (timeseries[date]["3. low"] * 100).toFixed(2).toString(),
        close: (timeseries[date]["4. close"] * 100).toFixed(2).toString()
      };
    });
    fs.writeFile("data.json", JSON.stringify(json.reverse()), err => {
      if (err) throw err;
      console.log("Written to data.json");
    });
  })
  .catch(err => console.log(err.message));
