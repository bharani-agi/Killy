import React, { Component } from "react";
import NavigationBar from "./Navbar";
import Section from "./Sections";
import WhyImagesList from "./whyImagesList";
import CardList from "./CardList";
import PlatformsImagesList from "./PlatformsImagesList";
import Footer from "./Footer";
import "./BgImage.css";
// import PartnerList from "./partnerList";
import { Button } from "reactstrap";
import WhyImageSlider from "./whyimageSlider";
import Card3 from "./Card3";
// import OurPartnerSlider from "./ourpartnerSlider";
import PlatformSlider from "./platformSlider";
class Main extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <div>
          <div className="ImgProp">
            <div class="row d-flex justify-content-cente">
              {/* <!--Grid column--> */}
              <div class="col-md-4  mx-auto">
                {/* <!-- Video --> */}
                <div class="embed-responsive embed-responsive-16by9 mb-4">
                  <iframe
                    class="embed-responsive-item"
                    src="https://www.youtube.com/embed/vlDzYIIOYmM"
                    allowfullscreen
                  />
                </div>
              </div>
            </div>
            {/* <!--Grid column--> */}
          </div>
          <div>
            <Button className="imgBtn" color="primary">
              Chat with Killy
            </Button>
          </div>
          <div style={{ paddingTop: "9vh" }}>
            <Section title="Why Choose Killy" />
            <WhyImageSlider />
            <Section title="Services" />
            <CardList />
            <Section title="Our Partners" />
            <Card3 />
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
