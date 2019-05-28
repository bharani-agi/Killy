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
                <NavLink className="LinkColor navItem" href="/Main">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="LinkColor navItem" href="#">
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="LinkColor navItem" href="/contactUs">
                  Contact Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="LinkColor navItem" href="#">
                  <a className="fb-ic" href="https://www.facebook.com/heykilly">
                    <i className="fab fa-facebook-f fa-lg white-text mr-4"> </i>
                  </a>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="LinkColor navItem" href="#">
                  <a className="tw-ic" href="https://twitter.com/HeyKilly">
                    <i className="fab fa-twitter fa-lg white-text mr-4"> </i>
                  </a>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="LinkColor navItem" href="#">
                  <a
                    className="ytube-ic"
                    href="https://www.youtube.com/channel/UCDaRE5WFvp6KBrGNYXVs6jg?view_as=public"
                  >
                    <i className="fab fa-youtube fa-lg white-text mr-4" />
                  </a>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="LinkColor navItem" href="#">
                  <a
                    className="li-ic"
                    href="https://www.linkedin.com/company/killy"
                  >
                    <i className="fab fa-linkedin-in fa-lg white-text mr-4">
                      {" "}
                    </i>
                  </a>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="LinkColor navItem" href="#">
                  <a
                    className="ins-ic"
                    href="https://www.instagram.com/hey_killy/"
                  >
                    <i className="fab fa-instagram fa-lg white-text mr-4"> </i>
                  </a>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="LinkColor navItem" href="#">
                  <a
                    className="pin-ic"
                    href="https://www.pinterest.com/HeyKilly/"
                  >
                    <i className="fab fa-pinterest fa-lg white-text"> </i>
                  </a>
                </NavLink>
              </NavItem>
              {/* <NavLink className="LinkColor" href="#">
              <div className="alkn col-md-3 mx-auto">
                <div className="col-md-12">
                  <div className="mb-5 flex-center">
                    <!-- Facebook -->
                    <a
                      className="fb-ic"
                      href="https://www.facebook.com/heykilly"
                    >
                      <i className="fab fa-facebook-f fa-lg white-text mr-4">
                        {" "}
                      </i>
                    </a>
                    <!-- Twitter -->
                    <a className="tw-ic" href="https://twitter.com/HeyKilly">
                      <i className="fab fa-twitter fa-lg white-text mr-4"> </i>
                    </a>
                    <!-- Google +-->
                    <a
                      className="ytube-ic"
                      href="https://www.youtube.com/channel/UCDaRE5WFvp6KBrGNYXVs6jg?view_as=public"
                    >
                      <i className="fab fa-youtube fa-lg white-text mr-4" />
                    </a>
                    <!--Linkedin -->
                    <a
                      className="li-ic"
                      href="https://www.linkedin.com/company/killy"
                    >
                      <i className="fab fa-linkedin-in fa-lg white-text mr-4">
                        {" "}
                      </i>
                    </a>
                    <!--Instagram-->
                    <a
                      className="ins-ic"
                      href="https://www.instagram.com/hey_killy/"
                    >
                      <i className="fab fa-instagram fa-lg white-text mr-4">
                        {" "}
                      </i>
                    </a>
                    <!--Pinterest-->
                    <a
                      className="pin-ic"
                      href="https://www.pinterest.com/HeyKilly/"
                    >
                      <i className="fab fa-pinterest fa-lg white-text"> </i>
                    </a>
                  </div>
                </div>
              </div>
              </NavLink> */}

              {/* <NavItem>
                <NavLink className="LinkColor" href="/termsConditions">
                  Terms and Conditions
                </NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
