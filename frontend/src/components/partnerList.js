// import React, { Component } from "react";
// import partnerImages from "./partnerImages";
// // import Card3 from "./Card3";

// class PartnerList extends Component {
//   getPartnerCards = item => {
//     let array = [];
//     let size = 4;

//     while (item.length > 0) array.push(item.splice(0, size));

//     let cardArray = [];

//     if (array) {
//       for (let i = 0; i < array.length; i++) {
//         cardArray.push(<Card3 key={i} cardData={array[i]} />);
//         console.log(array[i]);
//       }
//     }

//     return cardArray;
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <div>{this.getPartnerCards(partnerImages)}</div>
//       </React.Fragment>
//     );
//   }
// }

// export default PartnerList;
