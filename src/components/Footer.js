import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="page-footer font-small indigo">
        <div className="container text-center text-md-left">
          <div className="row">
            {/* <div className="col-md-3 mx-auto"> */}
            {/* ><h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                Links
              </h5 */}

            {/* <ul className="list-unstyled">
                <li>
                  <a href="#!">Very long link 1</a>
                </li>
                <li>
                  <a href="#!">Very long link 2</a>
                </li>
                <li>
                  <a href="#!">Very long link 3</a>
                </li>
                <li>
                  <a href="#!">Very long link 4</a>
                </li>
              </ul> */}
            {/* </div> */}

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-3 mx-auto">
              {/* <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                Links
              </h5> */}

              {/* <ul className="list-unstyled">
                <li>
                  <a href="#!">Home</a>
                </li>
                <li>
                  <a href="#!">About Us</a>
                </li>
                <li>
                  <a href="#!">Contact Us</a>
                </li>
                <li>
                  <a href="#!">Privacy Policy</a>
                </li>
                <li>
                  <a href="#!">Terms & Conditions</a>
                </li>
              </ul> */}
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="alk col-md-3 mx-auto">
              <ul className="list-unstyled">
                <li>
                  <a className="lk" href="#!">
                    Home
                  </a>
                </li>
                <li>
                  <a className="lk" href="#!">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="lk" href="#!">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="lk" href="#!">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="lk" href="#!">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="ftrmgr col-md-3 mx-auto">
              <h5 className="ftr mt-3 mb-4">
                <b>We are at:</b>79 Ayer Rajah Crescent, #05-03, Singapore
                139955
              </h5>
              <h5 className="ftr mt-3 mb-4">
                <b>Get in touch:</b>info@killy.ai
              </h5>
              <h5 className="ftr mt-3 mb-4">
                <b>Support:</b>support@killy.ai
              </h5>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2018 Copyright:
          <a href="https://mdbootstrap.com/education/bootstrap/">
            {" "}
            KillychatApp.com
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
