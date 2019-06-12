import React from "react";
import image from "../images/logonew2.png";
import "./Nav.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar fixed="top" className="nav-color" light expand="md">
          <NavbarBrand className="imgProp" href="/">
            <img alt="" src={image} className="d-inline-block" />
            <div className="Title">
              <span className="logoName">Killy</span>
              <p className="logoHeading">FOR YOU,WITH YOU,ALWAYS</p>
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="LinkColor navItem ml-auto" href="/Main">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="LinkColor navItem ml-auto" href="/aboutUs">
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="LinkColor navItem ml-auto"
                  href="/contactUs"
                >
                  Contact Us
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  nav
                  caret
                  style={{ color: "white", marginTop: "2%" }}
                >
                  Follow Us
                </DropdownToggle>
                <DropdownMenu
                  right
                  style={{
                    backgroundColor: "white"
                  }}
                >
                  <DropdownItem>
                    <a
                      href="https://www.f6s.com/killy?follow=1"
                      target="_blank"
                      title="Follow Killy on F6S"
                    >
                      <img
                        src={require("../images/f6snew4.png")}
                        width="100"
                        height="30 "
                        alt="Follow Killy on F6S"
                        style={{
                          width: "100px",
                          height: "30px",
                          padding: "0px",
                          margin: "0px"
                        }}
                      />
                    </a>
                  </DropdownItem>
                  <DropdownItem>
                    <a
                      href="https://angel.co/company/killy-agi-technosys-pte-ltd?utm_medium=web&utm_campaign=individual_embed&utm_content=6984345"
                      target="_blank"
                    >
                      <img
                        src={require("../images/angel4.png")}
                        width="100"
                        height="30 "
                        alt="Follow Killy on F6S"
                        style={{
                          width: "100px",
                          height: "30px",
                          padding: "0px",
                          margin: "0px"
                        }}
                      />
                    </a>
                  </DropdownItem>
                  {/* <DropdownItem divider /> */}
                  {/* <DropdownItem>Reset</DropdownItem> */}
                </DropdownMenu>
              </UncontrolledDropdown>

              <div className="d-flex socila_content">
                <NavItem>
                  <NavLink
                    className="LinkColor navItem social_icon ml-auto"
                    href="https://www.facebook.com/heykilly"
                  >
                    <a
                      className="fb-ic"
                      href="https://www.facebook.com/heykilly"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f fa-lg white-text "> </i>
                    </a>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="LinkColor navItem social_icon ml-auto"
                    href="https://twitter.com/HeyKilly"
                  >
                    <a
                      className="tw-ic"
                      href="https://twitter.com/HeyKilly"
                      target="_blank"
                    >
                      <i className="fab fa-twitter fa-lg white-text "> </i>
                    </a>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className="LinkColor navItem social_icon ml-auto"
                    href="https://www.youtube.com/channel/UCDaRE5WFvp6KBrGNYXVs6jg?view_as=public"
                  >
                    <a
                      className="ytube-ic"
                      href="https://www.youtube.com/channel/UCDaRE5WFvp6KBrGNYXVs6jg?view_as=public"
                      target="_blank"
                    >
                      <i className="fab fa-youtube fa-lg white-text " />
                    </a>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="LinkColor navItem social_icon ml-auto"
                    href="https://www.linkedin.com/company/killy/"
                  >
                    <a
                      className="li-ic"
                      href="https://www.linkedin.com/company/killy/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in fa-lg white-text "> </i>
                    </a>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="LinkColor navItem social_icon ml-auto"
                    href="https://www.instagram.com/hey_killy/"
                  >
                    <a
                      className="ins-ic"
                      href="https://www.instagram.com/hey_killy/"
                      target="_blank"
                    >
                      <i className="fab fa-instagram fa-lg white-text "> </i>
                    </a>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="LinkColor navItem social_icon"
                    href="https://www.pinterest.com/HeyKilly/"
                  >
                    <a
                      className="pin-ic"
                      href="https://www.pinterest.com/HeyKilly/"
                      target="_blank"
                    >
                      <i className="fab fa-pinterest fa-lg white-text"> </i>
                    </a>
                  </NavLink>
                </NavItem>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
