import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter, Route } from "react-router-dom";
import PrivatePolicy from "./components/privatePolicy";
import TermsConditions from "./components/TermsCondition";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Main} />
          <Route exact path="/privatePolicy" component={PrivatePolicy} />
          <Route exact path="/termsConditions" component={TermsConditions} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
