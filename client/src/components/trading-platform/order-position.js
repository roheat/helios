import React, { Component } from "react";

export default class OrderPosition extends Component {
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
            {/* <div className="col-12 col-md-3">
              <label className="text-left">Price per lot</label>
              <input
                className="form-control"
                type="text"
                readonly
                placeholder="0.2 ETH"
              />
            </div> */}
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <form>
                <div className="form-group text-center ">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Order Qty"
                  />
                  <div className="d-flex justify-content-between mt-2">
                    <p>Margin:</p>
                    <p>1%</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Order Value:</p>
                    <p>0.2 ETH</p>
                  </div>
                  <button type="submit" className="btn btn-success mt-3">
                    BUY/LONG
                  </button>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-6">
              <form>
                <div className="form-group text-center ">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Order Qty"
                  />
                  <div className="d-flex justify-content-between mt-2">
                    <p>Margin:</p>
                    <p>1%</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Order Value:</p>
                    <p>0.2 ETH</p>
                  </div>
                  <button type="submit" className="btn btn-danger mt-3">
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
