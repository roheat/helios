import React, { Component } from "react";

export default class OrderBook extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Order Book</h5>
          <p className="card-text">List of all filled orders.</p>

          <table className="table table-striped table-dark table-hover">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>BUY/LONG ADDRESS</th>
                <th>SELL/SHORT ADDRESS</th>
                <th>QUANTITY</th>
                <th>PRICE</th>
                <th>TOTAL AMOUNT</th>
                <th>EXPIRY</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="align-middle">1</td>
                <td className="align-middle">
                  0xca35b7d915458ef540ade6068dfe2f44e8fa733c
                </td>
                <td className="align-middle">
                  0x14723a09acff6d2a60dcdf7aa4aff308fddc160c
                </td>
                <td className="align-middle">5</td>
                <td className="align-middle">0.2 ETH</td>
                <td className="align-middle">1.0 ETH</td>
                <td className="align-middle">2019-12-31</td>
                <td className="align-middle">
                  <button className="btn btn-success">SQUARE OFF</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>0xca35b7d915458ef540ade6068dfe2f44e8fa733c</td>
                <td>0x14723a09acff6d2a60dcdf7aa4aff308fddc160c</td>
                <td>5</td>
                <td>0.2 ETH</td>
                <td>1.0 ETH</td>
                <td>2019-12-31</td>
                <td>
                  <button className="btn btn-success">SQUARE OFF</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
