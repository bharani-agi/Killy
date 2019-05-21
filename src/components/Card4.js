import React, { Component } from "react";
import "./Card4.css";
class Card4 extends Component {
  render() {
    const cardData = this.props.cardData;
    return (
      <div className="card-group">
        {cardData.map(item => (
          <div className="card4" key={item.id}>
            <img
              className="card4-img-top"
              src={require("../" + item.thumb)}
              alt={item.title}
            />
          </div>
        ))}
      </div>
    );
  }
}
export default Card4;
