import React, { Component } from "react";
import Slider from "react-slick";
import "./whyimageSlider.css";
// import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { HoverCard } from "react-png-hovercard";
export default class WhyImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      centerMode: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings} className="slide slide-list">
          <div>
            <HoverCard
              className="hoverCardwhy"
              front={
                <div className="Front">
                  <img
                    className="crdImg1"
                    src={require("../images/allinone.svg")}
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                  <p className="Title">All in one Assistant</p>
                </div>
              }
              back={
                <div className="Back">
                  <p className="content">
                    Proactive in making bookings and gives approx. budget while
                    planning. Makes live & personalized recommendations based on
                    your likings.
                  </p>
                </div>
              }
            />
          </div>
          <div>
            <HoverCard
              className="hoverCardwhy"
              front={
                <div className="Front">
                  <img
                    className="crdImg1"
                    src={require("../images/bestprice.svg")}
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                  <p className="Title">Best Price</p>
                </div>
              }
              back={
                <div className="Back">
                  <p className="content">
                    Our partnerships provide us with the Best-In-Market rates
                    which would be provided to customers as well.
                  </p>
                </div>
              }
            />
          </div>
          <div>
            <HoverCard
              className="hoverCardwhy"
              front={
                <div className="Front">
                  <img
                    className="crdImg1"
                    src={require("../images/simple.svg")}
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                  <p className="Title">Simple Structure</p>
                </div>
              }
              back={
                <div className="Back">
                  <p className="content">
                    An easy and simple voice assistive model
                  </p>
                </div>
              }
            />
          </div>
          <div>
            <HoverCard
              className="hoverCardwhy"
              front={
                <div className="Front">
                  <img
                    className="crdImg1"
                    src={require("../images/multi.jpg")}
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                  <p className="Title">Multi Linguistic</p>
                </div>
              }
              back={
                <div className="Back">
                  <p className="content">
                    Multi Linguistic Audio feature makes it convenient to use
                  </p>
                </div>
              }
            />
          </div>
          <div>
            <HoverCard
              className="hoverCardwhy"
              front={
                <div className="Front">
                  <img
                    className="crdImg1"
                    src={require("../images/service.svg")}
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                  <p className="Title">Service Guarantee</p>
                </div>
              }
              back={
                <div className="Back">
                  <p className="content">
                    No more waiting on line to connect with customer service.
                    All communications handled by Killy right at your
                    fingertips.
                  </p>
                </div>
              }
            />
          </div>
          <div>
            <HoverCard
              className="hoverCardwhy"
              front={
                <div className="Front">
                  <img
                    className="crdImg1"
                    src={require("../images/tripPlanner.svg")}
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                  <p className="Title">Trip planner & Optimizer</p>
                </div>
              }
              back={
                <div className="Back">
                  <p className="content">
                    Optimizes traveling plans so as to maximize the efficiency
                    of the trip
                  </p>
                </div>
              }
            />
          </div>
        </Slider>
      </div>
    );
  }
}
