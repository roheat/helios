import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import TradingPlatform from "./components/trading-platform";
import LandingPage from "./components/landing-page";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={LandingPage} />
        <Route path="/platform" exact component={TradingPlatform} />
      </BrowserRouter>
    </div>
  );
}

export default App;
