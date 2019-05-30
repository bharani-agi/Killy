import React, { Component } from "react";
import whyImages from "./whyImages";
import Card1 from "./Card1";

class WhyImagesList extends Component {
  getProjectCards = item => {
    let arrays = [];
    let size = 3;

    while (item.length > 0) arrays.push(item.splice(0, size));

    let cardArray = [];

    if (arrays) {
      for (let i = 0; i < arrays.length; i++) {
        cardArray.push(<Card1 key={i} cardData={arrays[i]} />);
      }
    }

    return cardArray;
  };

  render() {
    return (
      <React.Fragment>
        <div>{this.getProjectCards(whyImages)}</div>
      </React.Fragment>
    );
  }
}

export default WhyImagesList;
