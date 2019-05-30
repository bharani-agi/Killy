import React from "react";
import image from "../images/logonew.png";
import "./Nav.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
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
            <span className="logoName">Killy</span>
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
              <div className="d-flex socila_content">
                <NavItem>
                  <NavLink
                    className="LinkColor navItem social_icon ml-auto"
                    href="https://www.facebook.com/heykilly"
                  >
                    <a
                      className="fb-ic"
                      href="https://www.facebook.com/heykilly"
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
                    <a className="tw-ic" href="https://twitter.com/HeyKilly">
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
