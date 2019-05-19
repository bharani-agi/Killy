import React, { Component } from "react";
import KillyImages from "./KillyImages";
import Card2 from "./Card2";

class CardList extends Component {
  getProjectCards = item => {
    let arrays = [];
    let size = 5;

    while (item.length > 0) arrays.push(item.splice(0, size));

    let cardArray = [];

    if (arrays) {
      for (let i = 0; i < arrays.length; i++) {
        cardArray.push(<Card2 key={i} cardData={arrays[i]} />);
      }
    }

    return cardArray;
  };

  render() {
    return (
      <React.Fragment>
        <div>{this.getProjectCards(KillyImages)}</div>
      </React.Fragment>
    );
  }
}

export default CardList;
