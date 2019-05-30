import React, { Component } from "react";
import Slider from "react-slick";
import "./ourpartnerSlider.css";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
export default class OurPartnerSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings} className="slide">
          <div>
            <Card className="whyCard">
              <CardImg
                className="crdImg"
                top
                src={require("../images/Question.svg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="cardTitle">Coming Soon</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="whyCard">
              <CardImg
                className="crdImg"
                top
                src={require("../images/Question.svg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="cardTitle">Coming Soon</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="whyCard">
              <CardImg
                className="crdImg"
                top
                src={require("../images/Question.svg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="cardTitle">Coming Soon</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="whyCard">
              <CardImg
                className="crdImg"
                top
                src={require("../images/Question.svg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="cardTitle">Coming Soon</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="whyCard">
              <CardImg
                className="crdImg"
                top
                src={require("../images/Question.svg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="cardTitle">Coming Soon</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="whyCard">
              <CardImg
                className="crdImg"
                top
                src={require("../images/Question.svg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="cardTitle">Coming Soon</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="whyCard">
              <CardImg
                className="crdImg"
                top
                src={require("../images/Question.svg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="cardTitle">Coming Soon</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="whyCard">
              <CardImg
                className="crdImg"
                top
                src={require("../images/Question.svg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="cardTitle">Coming Soon</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="partnerCard">
              <CardImg
                className="crdImg"
                top
                src={require("../images/Question.svg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="cardTitle">Coming Soon</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="whyCard">
              <CardImg
                className="crdImg"
                top
                src={require("../images/Question.svg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="cardTitle">Coming Soon</CardTitle>
              </CardBody>
            </Card>
          </div>
        </Slider>
      </div>
    );
  }
}
