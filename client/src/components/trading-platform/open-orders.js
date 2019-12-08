import React, { Component } from "react";

export default class OpenOrders extends Component {
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
