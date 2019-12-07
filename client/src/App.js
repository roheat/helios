import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import TradingPlatform from "./components/trading-platform";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={TradingPlatform} />
      </BrowserRouter>
    </div>
  );
}

export default App;
