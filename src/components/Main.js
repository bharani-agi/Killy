import React, { Component } from "react";
import NavigationBar from "./Navbar";
import Section from "./Sections";
import WhyImagesList from "./whyImagesList";
import CardList from "./CardList";
import PlatformsImagesList from "./PlatformsImagesList";
import Footer from "./Footer";
import "./BgImage.css";
import PartnerList from "./partnerList";
import { Button } from "reactstrap";

class Main extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <div className="ImgProp" />
        <Button className="btn">Chat With Killy</Button>
        <div style={{ paddingTop: "9vh" }}>
          <Section title="Why Choose Killy" />
          <WhyImagesList />
          <Section title="Services" />
          <CardList />
          <Section title="Our Partners" />
          <PartnerList />
          <Section title="Platforms" className="path" />
          <PlatformsImagesList />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
