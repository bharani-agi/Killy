import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter, Route } from "react-router-dom";
import PrivatePolicy from "./components/privacyPolicy";
import termsandconditions from "./components/termsandconditions";
import AppPermissions from "./components/appPermission";
import ContactUs from "./components/contactUs";
import MapContainer from "./components/map";
import { Map, GoogleApiWrapper } from "google-maps-react";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Main} />
          <Route exact path="/Main" component={Main} />
          <Route exact path="/privacyPolicy" component={PrivatePolicy} />
          <Route
            exact
            path="/termsandconditions"
            component={termsandconditions}
          />
          <Route exact path="/appPermission" component={AppPermissions} />
          <Route exact path="/contactUs" component={ContactUs} />
          <Route exact path="/map" component={MapContainer} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
