import React, { Component } from "react";
import "./Card1.css";

class Card1 extends Component {
  state = {};
  render() {
    return (
      <div className="card-group">
        <div className="card1">
          <img
            className="card-img-top"
            src={require("../images/Assistive.png")}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 id="c1" className="card-title">
              Assistive
            </h5>
          </div>
        </div>
        <div className="card1">
          <img
            className="card-img-top"
            src={require("../images/Tick.png")}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 id="c1" className="card-title">
              Assured
            </h5>
          </div>
        </div>
        <div className="card1">
          <img
            className="card-img-top"
            src={require("../images/multi.jpg")}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Multilingual</h5>
          </div>
        </div>
        <div className="card1">
          <img
            className="card-img-top"
            src={require("../images/thumsUp.jpg")}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 id="c1" className="card-title">
              Simple
            </h5>
          </div>
        </div>
        <div className="card1">
          <img
            className="card-img-top"
            src={require("../images/heart-flat.png")}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Personalized</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Card1;
