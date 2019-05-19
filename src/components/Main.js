import React, { Component } from "react";
import NavigationBar from "./Navbar";
import Section from "./Sections";
import Card1 from "./Card1";
import CardList from "./CardList";
import Card4 from "./Card4";
import Footer from "./Footer";
import "./BgImage.css";
import PartnerList from "./partnerList";

class Main extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <div className="ImgProp" />
        <div style={{ paddingTop: "9vh" }}>
          <Section title="Why Choose Killy" />
          <Card1 />
          <Section title="Services" />
          <CardList />
          <Section title="Our Partners" />
          <PartnerList />
          <Section title="Platforms" />
          <Card4 />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
