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
import WhyImageSlider from "./whyimageSlider";
import OurPartnerSlider from "./ourpartnerSlider";
import PlatformSlider from "./platformSlider";

class Main extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <div style={{ marginTop: 15 }}>
          <div className="ImgProp" />
          <Button className="btn">Chat With Killy</Button>
          <div style={{ paddingTop: "9vh" }}>
            <Section title="Why Choose Killy" />
            <WhyImageSlider />
            <Section title="Services" />
            <CardList />
            <Section title="Our Partners" />
            <OurPartnerSlider />
            <Section title="Platforms" className="path" />
            <PlatformSlider />

            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
