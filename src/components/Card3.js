import React, { Component } from "react";
import "./Card3.css";
class Card3 extends Component {
  state = {};
  render() {
    return (
      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <img
              class="card3-img-top"
              src={require("../images/partnership.svg")}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title3">Merchant Partnership</h5>
              <p class="card-text">
                The partnership with our Merchant Partners.
              </p>
              <a href="#" class="btnn">
                Login
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <img
              class="card3-img-top"
              src={require("../images/partner21.svg")}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title3">SDK Partnership</h5>
              <p class="card-text">The partnership with the SDK partners.</p>
              <a href="#" class="btnn">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card3;
