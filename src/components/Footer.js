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
                  <a className="lk" href="/Main">
                    Home
                  </a>
                </li>
                <li>
                  <a className="lk" href="#!">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="lk" href="/contactUs">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="lk" href="/privacyPolicy">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="lk" href="/termsandconditions">
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
                  <a
                    class="fb-ic"
                    href="https://www.facebook.com/heykilly"
                    target="_blank"
                  >
                    <i class="fab fa-facebook-f fa-lg white-text mr-4"> </i>
                  </a>
                  {/* <!-- Twitter --> */}
                  <a
                    class="tw-ic"
                    href="https://twitter.com/HeyKilly"
                    target="_blank"
                  >
                    <i class="fab fa-twitter fa-lg white-text mr-4"> </i>
                  </a>
                  {/* <!-- Google +--> */}
                  <a
                    class="ytube-ic"
                    href="https://www.youtube.com/channel/UCDaRE5WFvp6KBrGNYXVs6jg?view_as=public"
                    target="_blank"
                  >
                    <i class="fab fa-youtube fa-lg white-text mr-4" />
                  </a>
                  {/* <!--Linkedin --> */}
                  <a
                    class="li-ic"
                    href="https://www.linkedin.com/company/killy"
                    target="_blank"
                  >
                    <i class="fab fa-linkedin-in fa-lg white-text mr-4"> </i>
                  </a>
                  {/* <!--Instagram--> */}
                  <a
                    class="ins-ic"
                    href="https://www.instagram.com/hey_killy/"
                    target="_blank"
                  >
                    <i class="fab fa-instagram fa-lg white-text mr-4"> </i>
                  </a>
                  {/* <!--Pinterest--> */}
                  <a
                    class="pin-ic"
                    href="https://www.pinterest.com/HeyKilly/"
                    target="_blank"
                  >
                    <i class="fab fa-pinterest fa-lg white-text"> </i>
                  </a>
                  {/* <a
                    href="https://www.f6s.com/killy?follow=1"
                    target="_blank"
                    title="Follow Killy on F6S"
                  >
                    <img
                      src="https://www.f6s.com/images/f6s-follow-white.png"
                      width="78"
                      height="22 "
                      alt="Follow Killy on F6S"
                      // style="width: 78px; height: 22px; padding: 0px; margin: 0px;"
                    />
                  </a> */}
                </div>
              </div>
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="ftrmgr col-md-4 mx-auto">
              <h5 className="ftr mt-3 mb-3">
                <b>We are at : </b>Block 79 Ayer Rajah Crescent, #05-03,
                Singapore 139955
              </h5>
              <h5 className="ftr mt-3 mb-3">
                <b>Get in touch : </b>
                <a href="#" style={{ textDecoration: "underline" }}>
                  hello@killy.ai
                </a>
              </h5>
              {/* <h5 className="ftr mt-3 mb-4">
                <b>Support:</b>support@killy.ai
              </h5> */}
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2018 Copyright:
          <a href="#">AGi Technosys Pte Ltd</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
