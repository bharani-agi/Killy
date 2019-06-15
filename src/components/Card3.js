import React, { Component } from "react";
import { Popover, PopoverBody } from "reactstrap";
import "./Card3.css";
class Card3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popoverOpen: false,
      popoverOpen2: false
    };
  }

  toggle = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  };
  toggle2 = () => {
    this.setState({
      popoverOpen2: !this.state.popoverOpen2
    });
  };
  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <img
              className="card3-img-top"
              src={require("../images/partnership.svg")}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title3">Merchant Partnership</h5>
              <p className="card-text">
                Join us to offer your services through Killy.
              </p>
              <div>
                <button id="Popover1" type="button" className="btnn">
                  Join Us
                </button>
                <Popover
                  placement="right"
                  isOpen={this.state.popoverOpen}
                  target="Popover1"
                  toggle={this.toggle}
                >
                  <PopoverBody>
                    "Hi, You can send us a mail on{" "}
                    <a
                      href="#"
                      style={{ color: "blue", textDecoration: "underline" }}
                    >
                      hello@killy.ai
                    </a>{" "}
                    to connect with us! Apologies for the inconvenience"
                  </PopoverBody>
                </Popover>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <img
              className="card3-img-top"
              src={require("../images/partner21.svg")}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title3">SDK Partnership</h5>
              <p className="card-text">
                Offer the services of Killy on your platform.
              </p>
              <button id="Popover2" type="button" className="btnn">
                Join Us
              </button>
              <Popover
                placement="right"
                isOpen={this.state.popoverOpen2}
                target="Popover2"
                toggle={this.toggle2}
              >
                <PopoverBody>
                  "Hi, You can send us a mail on{" "}
                  <a
                    href="#"
                    style={{ color: "blue", textDecoration: "underline" }}
                  >
                    hello@killy.ai
                  </a>{" "}
                  to connect with us! Apologies for the inconvenience"
                </PopoverBody>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card3;
