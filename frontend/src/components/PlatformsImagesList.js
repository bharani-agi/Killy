import React, { Component } from "react";
import PlatformImages from "./PlatformImages";
import Card4 from "./Card4";

class PlatformsImagesList extends Component {
  getPartnerCards = item => {
    let array = [];
    let size = 5;

    while (item.length > 0) array.push(item.splice(0, size));

    let cardArray = [];

    if (array) {
      for (let i = 0; i < array.length; i++) {
        cardArray.push(<Card4 key={i} cardData={array[i]} />);
        console.log(array[i]);
      }
    }

    return cardArray;
  };

  render() {
    return (
      <React.Fragment>
        <div>{this.getPartnerCards(PlatformImages)}</div>
      </React.Fragment>
    );
  }
}

export default PlatformsImagesList;
