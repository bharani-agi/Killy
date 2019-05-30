import React, { Component } from "react";
import NavigationBar from "./Navbar";
const AppPermissions = () => {
  return (
    <div style={{ margin: "3%" }}>
      <NavigationBar />
      <h2 style={{ marginLeft: "33%", marginRight: "2%",marginTop:"8%" }}>
        KILLY APP PERMISSIONS
      </h2>
      <h3 style={{ marginLeft: "2%", marginRight: "2%" }}>
        READ YOUR CONTACTS
      </h3>
      <p style={{ marginLeft: "2%", marginRight: "2%" }}>
        This gives you the ability to pick a number from contacts for a quick
        recharge or bill payment. This is also so that you are able to use your
        contact's name in chat in order to do a quick recharge or bill payment
        for them without entering their number. Killy collects your contact data
        with the sole purpose of providing a personalized experience on the app.
        For instance, Killy might provide user the ability to perform recharge
        for a contact just by entering his name, add a contact to an ongoing
        conversation with Killy. Killy collects user’s contacts data via a
        secure interface (HTTPS), the data is used to help user make quicker
        transactions, the data is used internally only and is not shared with
        any external parties. The data is being processed in an automated manner
        and is not exposed or visible to any human, eitherinternal or external
        to Killy.
      </p>
      <h3 style={{ marginLeft: "2%", marginRight: "2%" }}>STORAGE</h3>
      <p style={{ marginLeft: "2%", marginRight: "2%" }}>
        This allows us to locally store some data when you are using the app and
        avoid unnecessary network calls and save your mobile data. It also helps
        us make your Killy experience faster and smoother.
      </p>
      <h3 style={{ marginLeft: "2%", marginRight: "2%" }}>
        NETWORK COMMUNICATION
      </h3>
      <p style={{ marginLeft: "2%", marginRight: "2%" }}>
        This allows your Android phone/tablet to both receive as well as send
        updates and send messages to and from our servers. Your data is sent
        through a secure connection.
      </p>
      <h3 style={{ marginLeft: "2%", marginRight: "2%" }}>YOUR ACCOUNTS</h3>
      <p style={{ marginLeft: "2%", marginRight: "2%" }}>
        To make signing up and/or signing in to Killy easier and use your
        account info to pre-fill some of the information required to register on
        Killy, thus improving your signup experience.
      </p>
      <h3 style={{ marginLeft: "2%", marginRight: "2%" }}>
        DEVICE INFORMATION
      </h3>
      <p style={{ marginLeft: "2%", marginRight: "2%" }}>
        We use this to know which devices you are using to use Killy. This is
        needed for avoiding fraudulent activities on the app and to provide you
        the best possible personalized products & offers.
      </p>
      <h3 style={{ marginLeft: "2%", marginRight: "2%" }}>
        RECEIVE AND READ SMS
      </h3>
      <p style={{ marginLeft: "2%", marginRight: "2%" }}>
        To ease the process of signup, we read OTP messages sent by Killy to
        verify you as a user and through partners to make your payment and
        checkout process seamless. Killy collects your SMS data with the sole
        purpose of providing a personalized experience on the app. For instance,
        Killy might send users a reminder regarding your impending postpaid bill
        due date by reading your operator's message. Killy collects users SMS
        via a secure interface (HTTPS), the data is used to help user make
        quicker transactions and to provide personalized reminders and
        recommendations, the data is used internally only and is not shared with
        any external parties. The data is being processed in an automated manner
        and is not exposed or visible to any human, either internal or external
        to Killy.
      </p>
      <h3 style={{ marginLeft: "2%", marginRight: "2%" }}>LOCATION</h3>
      <p style={{ marginLeft: "2%", marginRight: "2%" }}>
        We access your location to provide location aware services to you like
        cab booking, events booking, hotel booking and local searches.
      </p>
    </div>
  );
};

export default AppPermissions;
