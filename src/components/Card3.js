import React, { Component } from "react";
import "./Card3.css";
class Card3 extends Component {
  render() {
    const cardData = this.props.cardData;
    return (
      <div className="card-group">
        {cardData.map(item => (
          <div className="card3" key={item.id}>
            <img
              className="card3-img-top"
              src={require("../" + item.thumb)}
              alt={item.title}
            />
            <div className="card-body">
              <h5 className="card-title3">{item.title}</h5>
            </div>
            <div className="card-body">
              <button type="button" class="btn btn-danger">
                Login
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Card3;
