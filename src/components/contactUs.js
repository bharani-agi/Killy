import React, { Component } from "react";
import contactUs from "./contactUs.css";
import NavigationBar from "./Navbar";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import MapContainer from "./map";
const ContactUs = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <section class="Material-contact-section section-padding section-dark">
        <div class="container1">
          <div class="row">
            {/* <!-- Section Titile --> */}
            <div class="col-md-12 wow animated fadeInLeft" data-wow-delay=".2s">
              <h3 class="section-title">Contact with Killy Team</h3>
            </div>
          </div>
          <div class="row">
            {/* <!-- Section Titile --> */}
            <div
              class="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft"
              data-wow-delay=".2s"
            >
              {/* <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content.
              </p> */}

              <div class="find-widget">
                Company: <a href="#">Killy</a>
              </div>
              <div class="find-widget">
                Address:{" "}
                <a href="#">
                  Block 79, AStart Central, Ayer Rajah Crescent, #05-03 ,
                  Singapore 139955
                </a>
              </div>
              <div class="find-widget">
                Phone: <b>+ +65 96531921</b>
              </div>

              <div class="find-widget">
                Email: <a href="#">hello@killy.ai</a>
              </div>
              {/* <div class="find-widget">
              Program: <a href="#">Mon to Sat: 09:30 AM - 10.30 PM</a>
            </div> */}
            </div>
            {/* <!-- contact form --> */}
            <div class="col-md-6 wow animated fadeInRight" data-wow-delay=".2s">
              <div class="row">
                <div
                  class="col-md-12 wow animated fadeInLeft"
                  data-wow-delay=".2s"
                >
                  <h3 class="section-title r">Leave Message</h3>
                </div>
              </div>
              <form
                class="shake"
                role="form"
                method="post"
                id="contactForm"
                name="contact-form"
                data-toggle="validator"
              >
                {/* <!-- Name --> */}
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="form_name" class="label">
                        Firstname *
                      </label>
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="Please enter your firstname *"
                        required="required"
                        data-error="Firstname is required."
                      />
                      <div class="help-block with-errors" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="form_lastname" class="label">
                        Lastname *
                      </label>
                      <input
                        id="form_lastname"
                        type="text"
                        name="surname"
                        class="form-control"
                        placeholder="Please enter your lastname *"
                        required="required"
                        data-error="Lastname is required."
                      />
                      <div class="help-block with-errors" />
                    </div>
                  </div>
                </div>
                {/* <!-- email --> */}
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="form_name" class="label">
                        Email *
                      </label>
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="Please enter your email *"
                        required="required"
                        data-error="Firstname is required."
                      />
                      <div class="help-block with-errors" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="form_lastname" class="label">
                        Please specify your need *
                      </label>
                      <input
                        id="form_lastname"
                        type="text"
                        name="surname"
                        class="form-control"
                        placeholder="Request Quotation *"
                        required="required"
                        data-error="Lastname is required."
                      />
                      <div class="help-block with-errors" />
                    </div>
                  </div>
                </div>
                {/* <!-- Message --> */}
                <div class="form-group label-floating">
                  <label for="message" class="label">
                    Message *
                  </label>
                  <textarea
                    class="form-control"
                    rows="3"
                    id="message"
                    name="message"
                    required
                    data-error="Write your message"
                  />
                  <div class="help-block with-errors" />
                </div>
                {/* <!-- Form Submit --> */}
                <div class="form-submit mt-5">
                  <button class="btn" type="submit" id="form-submit">
                    Send
                  </button>
                  <div id="msgSubmit" class="h3 text-center hidden" />
                  <div class="clearfix" />
                </div>
              </form>
            </div>
          </div>
          {/* <MapContainer /> */}
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default ContactUs;
