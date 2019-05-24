import React, { Component } from "react";
import Slider from "react-slick";
import "./platformSlider.css";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
export default class PlatformSlider extends Component {
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
                className="crdImage21"
                top
                src={require("../images/Google_Assistant_logo.svg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="cardTitle">Google Assistant</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="whyCard">
              <CardImg
                className="crdImage21"
                top
                src={require("../images/messenger1.svg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="cardTitle">FaceBook Messenger</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="whyCard">
              <CardImg
                className="crdImage21"
                top
                src={require("../images/slack.svg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="cardTitle">Slack</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="whyCard">
              <CardImg
                className="crdImage21"
                top
                src={require("../images/viber.svg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="cardTitle">Viber</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="whyCard">
              <CardImg
                className="crdImage21"
                top
                src={require("../images/line3.svg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="cardTitle">Line</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="whyCard">
              <CardImg
                className="crdImage21"
                top
                src={require("../images/alexa4.png")}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="cardTitle">Amazon Alexa</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="whyCard">
              <CardImg
                className="crdImage21"
                top
                src={require("../images/cortana.svg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="cardTitle">MicroSoft Cortana</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="whyCard">
              <CardImg
                className="crdImage21"
                top
                src={require("../images/twitter11.svg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="cardTitle">Twitter</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="whyCard">
              <CardImg
                className="crdImage21"
                top
                src={require("../images/telegram.svg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="cardTitle">Telegram</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="whyCard">
              <CardImg
                className="crdImage21"
                top
                src={require("../images/hangout.svg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="cardTitle">Hangouts</CardTitle>
              </CardBody>
            </Card>
          </div>
        </Slider>
      </div>
    );
  }
}
