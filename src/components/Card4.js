import React, { Component } from "react";
import "./Card4.css";
class Card4 extends Component {
  state = {};
  render() {
    return (
      <div className="card-group">
        <div className="card4">
          <img
            className="card-img-top1"
            src={require("../images/azure.png")}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 id="c1" className="card4-title">
              Azure
            </h5>
          </div>
        </div>
        <div className="card4">
          <img
            className="card-img-top1"
            src={require("../images/w_c.png")}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 id="c1" className="card4-title">
              Watson Conversation
            </h5>
          </div>
        </div>
        <div className="card4">
          <img
            className="card-img-top1"
            src={require("../images/amazonlex.png")}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card4-title">Amazon Lex</h5>
          </div>
        </div>
        <div className="card4">
          <img
            className="card-img-top1"
            src={require("../images/dataflow.jpg")}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 id="c1" className="card4-title">
              DataFlow
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Card4;
