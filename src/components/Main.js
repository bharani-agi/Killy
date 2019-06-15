import React, { Component } from "react";
import NavigationBar from "./Navbar";
import Section from "./Sections";
import CardList from "./CardList";
import Footer from "./Footer";
import "./BgImage.css";
import { Button } from "reactstrap";
import WhyImageSlider from "./whyimageSlider";
import Card3 from "./Card3";
import PlatformSlider from "./platformSlider";
// import DropDown from "./dropDown";
class Main extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <div>
          <div className="ImgProp" />
          <div>
            <Button className="imgBtn" color="primary" href="/contactUs">
              Talk with Killy
            </Button>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="col-md-4 eT">
              <img
                src={require("../images/earth.svg")}
                style={{ width: "50%", marginLeft: "-30%" }}
                alt="Pic"
              />
              <img
                src={require("../images/earth.svg")}
                className="imgres"
                style={{ width: "50%", marginLeft: "180%" }}
                alt="Pic"
              />
            </div>
            <div className="col-md-6 vdo" style={{ marginLeft: "-25%" }}>
              <div className="embed-responsive embed-responsive-16by9 mb-4">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/wm4uuQluE6I"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            </div>
          </div>
          <div style={{ paddingTop: "9vh" }}>
            <Section title="Why Choose Killy" />
            <WhyImageSlider />

            <Section title="Services" />
            {/* <div>
              <img
                src={require("../images/cirrec.svg")}
                style={{ marginTop: "-15%" }}
              />
              
            </div> */}
            <CardList />
            <Section title="Platforms" className="path" />
            <PlatformSlider />
            {/* <Section title="New Section" /> */}
            {/* <FollowButtons /> */}
            <Section title="Our Partners" />
            <Card3 />
            <Section title="Investor Connect" />
            <iframe
              src="https://www.investmentnetwork.sg/embed/932393/300x250"
              width="300"
              height="250"
              // z-index="1"
              className="bnr"
              frameborder="0"
              // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              style={{ marginLeft: "38%", marginTop: "3%", zIndex: "1" }}
            >
              <p>Your browser does not support iframe</p>
            </iframe>
            {/* <Section title="Platforms" className="path" /> */}
            <div className="xyz">
              <img className="imgBtm" src={require("../images/earthP.svg")} />
            </div>
            {/* <PlatformSlider /> */}
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
