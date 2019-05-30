import React, { Component } from "react";
import NavigationBar from "./Navbar";
import Footer from "./Footer";
import Map from "./map";
import * as EmailValidator from "email-validator";
import axios from "axios";
class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      content: "",
      message: "",

      errors: {
        firstname: "",
        lastname: "",
        email: "",
        content: "",
        message: "",
        disabled: true
      }
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault();

    const { firstname, lastname, email, content, message } = this.state;
    axios
      .post("http://localhost:5000/send", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        content: content,
        message: message
      })
      .then(response => {
        if (response.data.msg === "success") {
          alert("Message Sent.");
          this.resetForm();
        } else if (response.data.msg === "fail") {
          alert("Message failed to send.");
        }
      });

    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      content: "",
      message: "",
      errors: {
        firstname: "",
        lastname: "",
        email: "",
        content: "",
        message: "",
        disabled: true
      }
    });
  };

  handleBlur = e => {
    const { errors, ...inputs } = this.state;
    this.validation(inputs);
  };

  validation = ({ firstname, lastname, email, content, message }) => {
    const errors = {
      firstname: "",
      lastname: "",
      email: "",
      content: "",
      message: ""
    };
    if (firstname.length === 0) {
      errors.firstname = "Firstname can not be empty.";
      errors.disabled = true;
    } else if (lastname.length === 0) {
      errors.lastname = "Lastname can not be empty.";
      errors.disabled = true;
    } else if (!EmailValidator.validate(email) || email.length === 0) {
      errors.email = "Please enter valid e-mail address";
      errors.disabled = true;
    } else if (content.length === 0) {
      errors.content = "Content field can not be null";
      errors.disabled = true;
    } else if (message.length === 0) {
      errors.message = "Message can not be empty.";
      errors.disabled = true;
    }

    this.setState({ errors });
    return errors;
  };

  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <section className="Material-contact-section section-padding section-light">
          <div className="container">
            <div className="row">
              {/* <!-- Section Titile --> */}
              <div
                className="col-md-12 wow1 animated fadeInLeft"
                data-wow-delay=".2s"
              >
                <h3 className="section-title e">Contact with Killy Team</h3>
              </div>
            </div>
            <div className="row">
              {/* <!-- Section Titile --> */}
              <div
                className="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft"
                data-wow-delay=".2s"
              >
                {/* <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content.
              </p> */}

                <div className="find-widget">
                  <p style={{ color: "white" }}>
                    {" "}
                    <span
                      style={{ fontSize: "1.4rem", fontWeight: "600" }}
                      className="section-title "
                    >
                      AGi Technosys Pte Ltd{" "}
                    </span>
                    <br />
                    Block 79, AStart Central, <br />
                    Ayer Rajah Crescent, #05-03 ,<br />
                    Singapore 139955
                    <br />
                    <strong>Ph: 65 9653 1921</strong>
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:hello@agitechnosys.com?Subject=Hello"
                      target="_top"
                      style={{ marginTop: "5%", textDecoration: "underline" }}
                    >
                      hello@killy.ai
                    </a>{" "}
                  </p>
                </div>
                {/* <div className="find-widget">
              Program: <a href="#">Mon to Sat: 09:30 AM - 10.30 PM</a>
            </div> */}
              </div>
              {/* <!-- contact form --> */}
              <div
                className="col-md-6 wow animated fadeInRight"
                data-wow-delay=".2s"
              >
                <div className="row">
                  <div
                    className="col-md-12 wow animated fadeInLeft"
                    data-wow-delay=".2s"
                  >
                    <h2 className="section-title r">Leave Message</h2>
                  </div>
                </div>
                <form className="shake" onSubmit={this.handleSubmit}>
                  {/* <!-- Name --> */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="firstname" className="label">
                          First Name *
                        </label>
                        <input
                          id="firstname"
                          type="text"
                          name="firstname"
                          className="form-control"
                          placeholder="Enter first name"
                          value={this.state.firstname}
                          onChange={this.handleChange}
                          onBlur={this.handleBlur}
                        />
                        <div>{this.state.errors.firstname}</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="lastname" className="label">
                          Last Name *
                        </label>
                        <input
                          id="lastname"
                          type="text"
                          name="lastname"
                          className="form-control"
                          placeholder="Please enter your Message "
                          value={this.state.lastname}
                          onChange={this.handleChange}
                          onBlur={this.handleBlur}
                        />
                        <div>{this.state.errors.lastname}</div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- email --> */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email" className="label">
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Please enter your email *"
                          value={this.state.email}
                          onChange={this.handleChange}
                          onBlur={this.handleBlur}
                        />
                        <div className="">{this.state.errors.email}</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="content" className="label">
                          Please specify your need *
                        </label>
                        <input
                          id="content"
                          type="text"
                          name="content"
                          className="form-control"
                          placeholder="Request Quotation *"
                          value={this.state.content}
                          onChange={this.handleChange}
                          onBlur={this.handleBlur}
                        />
                        <div>{this.state.errors.content}</div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Message --> */}
                  <div className="form-group label-floating">
                    <label htmlFor="message" className="label">
                      Message *
                    </label>
                    <textarea
                      style={{ marginLeft: "2.2%" }}
                      className="form-control"
                      rows="3"
                      id="message"
                      placeholder="Enter Message here"
                      name="message"
                      required
                      value={this.state.message}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                    <div>{this.state.errors.message}</div>
                  </div>
                  {/* <!-- Form Submit --> */}
                  <div className="form-submit mt-5">
                    <button
                      className="btn3"
                      type="submit"
                      disabled={this.state.errors.disabled}
                    >
                      Send
                    </button>
                    <div id="msgSubmit" className="h3 text-center hidden" />
                    <div className="clearfix" />
                    <p style={{ marginTop: "-1%" }}>
                      *These field are required
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Map />
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}
export default ContactUs;
