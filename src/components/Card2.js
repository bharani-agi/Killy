import React, { Component } from "react";
import "./Card2.css";
class Card2 extends Component {
  render() {
    const cardData = this.props.cardData;
    return (
      <div className="card-group">
        {cardData.map(item => (
          <div className="card2" key={item.id}>
            <img
              className="card2-img-top"
              src={require("../" + item.thumb)}
              alt={item.title}
            />
            <div className="card-body">
              <h5 className="card-title1">{item.title}</h5>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Card2;
