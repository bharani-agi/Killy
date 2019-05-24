import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="page-footer font-small indigo">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="alk1 col-md-4 mx-auto">
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
                  <a className="lk" href="/privatePolicy">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="lk" href="/termsConditions">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="alk2 col-md-4 mx-auto">
              <div class="col-md-12">
                <div class="mb-5 flex-center">
                  {/* <!-- Facebook --> */}
                  <a class="fb-ic">
                    <i class="fab fa-facebook-f fa-lg white-text mr-4"> </i>
                  </a>
                  {/* <!-- Twitter --> */}
                  <a class="tw-ic">
                    <i class="fab fa-twitter fa-lg white-text mr-4"> </i>
                  </a>
                  {/* <!-- Google +--> */}
                  <a class="gplus-ic">
                    <i class="fab fa-google-plus-g fa-lg white-text mr-4"> </i>
                  </a>
                  {/* <!--Linkedin --> */}
                  <a class="li-ic">
                    <i class="fab fa-linkedin-in fa-lg white-text mr-4"> </i>
                  </a>
                  {/* <!--Instagram--> */}
                  <a class="ins-ic">
                    <i class="fab fa-instagram fa-lg white-text mr-4"> </i>
                  </a>
                  {/* <!--Pinterest--> */}
                  <a class="pin-ic">
                    <i class="fab fa-pinterest fa-lg white-text"> </i>
                  </a>
                </div>
              </div>
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="ftrmgr col-md-4 mx-auto">
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
