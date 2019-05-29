import React, { Component } from "react";
import NavigationBar from "./Navbar";
import contactUs from "./contactUs.css";
const aboutUs = () => {
  return (
    <div style={{ backgroundColor: "#88cfe0", padding: "4%" }}>
      <React.Fragment>
        <NavigationBar />
        <div class="containerA" style={{ backgroundColor: "#88cfe0" }}>
          <h2
            style={{
              textAlign: "center",
              marginTop: "9%",
              fontWeight: "600",
              color: "white"
            }}
          >
            About Killy
          </h2>
          <div class="row">
            <div class="col">
              <p>
                An interactive AI powered self-learning personal assistant which
                aims to thin the line between Human Intelligence and Artificial
                Intelligence. Killy interacts with the users to understand their
                Socio-Cultural needs and make recommendation based on that. It
                enables users to access the information in any language due to
                its multi linguistic capacity. At the moment, it focuses at
                helping incoming travelers into Singapore.
              </p>
            </div>
            <div class="col">
              <p>
                Killy will be available for booking of tickets, multiple types
                of reservations and searching for local information. We aim to
                provide a seamless user experience which reduces their
                inhabitance towards usage of technology.
                {/* </p> */}
                {/* <p> */}
                In an era, where everything is at your fingertips, we now
                provide you, KILLY, your own personal assistant to fulfill all
                your needs and make your life easier and faster.
              </p>
            </div>
          </div>
        </div>
        <div class="containerA">
          <h2
            style={{
              textAlign: "center",
              marginTop: "9%",
              fontWeight: "600",
              color: "white"
            }}
          >
            Why Choose Killy
          </h2>
          <div class="row">
            <div class="col">
              <p>
                An interactive AI powered self-learning personal assistant which
                aims to thin the line between Human Intelligence and Artificial
                Intelligence. Killy interacts with the users to understand their
                Socio-Cultural needs and make recommendation based on that. It
                enables users to access the information in any language due to
                its multi linguistic capacity. At the moment, it focuses at
                helping incoming travelers into Singapore.
              </p>
            </div>
            <div class="col">
              <p>
                Killy will be available for booking of tickets, multiple types
                of reservations and searching for local information. We aim to
                provide a seamless user experience which reduces their
                inhabitance towards usage of technology.
                {/* </p> */}
                {/* <p> */}
                In an era, where everything is at your fingertips, we now
                provide you, KILLY, your own personal assistant to fulfill all
                your needs and make your life easier and faster
              </p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row" style={{ marginLeft: "5%" }}>
            <div class="col-md-4">
              <div class="view overlay">
                <img
                  src={require("../images/allinone.svg")}
                  class="img-fluid "
                  alt="smaple image"
                />
                <div class="mask flex-center rgba-blue-strong">
                  <p class="white-text">
                    Proactive in making bookings and gives approx. budget while
                    planning. Makes live & personalized recommendations based on
                    your likings.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="view overlay">
                <img
                  src={require("../images/bestprice.svg")}
                  class="img-fluid "
                  alt="smaple image"
                />
                <div class="mask flex-center rgba-blue-strong">
                  <p class="white-text">
                    Our partnerships provide us with the Best-In-Market rates
                    which would be provided to customers as well.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="view overlay">
                <img
                  src={require("../images/simple.svg")}
                  class="img-fluid "
                  alt="smaple image"
                />
                <div class="mask flex-center rgba-blue-strong">
                  <p class="white-text">
                    An easy and simple voice assistive model
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container" style={{ marginTop: "3%", marginBottom: "3%" }}>
          <div class="row" style={{ marginLeft: "5%" }}>
            <div class="col-md-4">
              <div class="view overlay">
                <img
                  src={require("../images/multi.svg")}
                  class=""
                  alt="smaple image"
                />
                <div class="mask flex-center rgba-blue-strong">
                  <p class="white-text">
                    Multi Linguistic Audio feature makes it convenient to use
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="view overlay">
                <img
                  src={require("../images/service.svg")}
                  class="img-fluid "
                  alt="smaple image"
                />
                <div class="mask flex-center rgba-blue-strong">
                  <p class="white-text">
                    No more waiting on line to connect with customer service.
                    All communications handled by Killy right at your
                    fingertips.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="view overlay">
                <img
                  src={require("../images/tripPlanner.svg")}
                  class="img-fluid imgSize "
                  alt="smaple image"
                />
                <div class="mask flex-center rgba-blue-strong">
                  <p class="white-text">
                    Optimizes traveling plans so as to maximize the efficiency
                    of the trip
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};
export default aboutUs;
