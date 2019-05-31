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
                Join leading brands offering their services on multiple
                platforms used by Killy
              </p>
              <button type="button" class="btnn">
                Login
              </button>
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
              <p class="card-text">
                Sell smart with an AI. Offer the services of Killy on your
                platform.
              </p>
              <button type="button" class="btnn">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card3;
