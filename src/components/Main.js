import React, { Component } from "react";
import NavigationBar from "./Navbar";
// import newNav from "./Navnew";
import Section from "./Sections";
// import WhyImagesList from "./whyImagesList";
import CardList from "./CardList";
// import PlatformsImagesList from "./PlatformsImagesList";
import Footer from "./Footer";
import "./BgImage.css";
// import PartnerList from "./partnerList";
import { Button } from "reactstrap";
import WhyImageSlider from "./whyimageSlider";
import Card3 from "./Card3";
// import Card4 from "./Card4";
// import OurPartnerSlider from "./ourpartnerSlider";
import PlatformSlider from "./platformSlider";
class Main extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <div>
          <div className="ImgProp" />
          <div>
            <Button className="imgBtn" color="primary">
              Talk with Killy
            </Button>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="col-md-4">
              <img
                src={require("../images/earth.svg")}
                style={{ width: "50%", marginLeft: "-30%" }}
                alt="Pic"
              />
            </div>
            <div className="col-md-6" style={{ marginLeft: "-25%" }}>
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
            <Section title="Our Partners" />
            <Card3 />
            <Section title="Platforms" className="path" />
            <div className="xyz">
              <img className="imgBtm" src={require("../images/earthP.svg")} />
            </div>
            <PlatformSlider />
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
