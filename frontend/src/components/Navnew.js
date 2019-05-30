import React, { Component } from "react";
class newNav extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img
            src="/docs/4.0/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
          Bootstrap
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
          <div class="navbar-text">
            <li className="icn">
              <a className="LinkColor li" href="#">
                <a className="fb-ic" href="https://www.facebook.com/heykilly">
                  <i className="fab fa-facebook-f fa-lg white-text"> </i>
                </a>
              </a>
            </li>
            <li className="icn">
              <a className="LinkColor li" href="#">
                <a className="tw-ic" href="https://twitter.com/HeyKilly">
                  <i className="fab fa-twitter fa-lg white-text"> </i>
                </a>
              </a>
            </li>
            <li className="icn">
              <a className="LinkColor li" href="#">
                <a
                  className="ytube-ic"
                  href="https://www.youtube.com/channel/UCDaRE5WFvp6KBrGNYXVs6jg?view_as=public"
                >
                  <i className="fab fa-youtube fa-lg white-text" />
                </a>
              </a>
            </li>
            <li className="icn">
              <a className="LinkColor li" href="#">
                <a
                  className="li-ic"
                  href="https://www.linkedin.com/company/killy"
                >
                  <i className="fab fa-linkedin-in fa-lg white-text"> </i>
                </a>
              </a>
            </li>
            <li className="icn">
              <a className="LinkColor li" href="#">
                <a
                  className="ins-ic"
                  href="https://www.instagram.com/hey_killy/"
                >
                  <i className="fab fa-instagram fa-lg white-text"> </i>
                </a>
              </a>
            </li>
            <li className="icn">
              <a className="LinkColor li" href="#">
                <a
                  className="pin-ic"
                  href="https://www.pinterest.com/HeyKilly/"
                >
                  <i className="fab fa-pinterest fa-lg white-text"> </i>
                </a>
              </a>
            </li>
          </div>
        </div>
      </nav>
    );
  }
}

export default newNav;
