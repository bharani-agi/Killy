var express = require("express");
var nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 5000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/send", (req, res) => {
  const output = `
    <h3>Contact Details</h3>
    <ul>  
      <li>Firstname: ${req.body.firstname}</li>
      <li>Lastname: ${req.body.lastname}</li>
      <li>Email: ${req.body.email}</li>
     
    </ul>
    <h3>Message</h3>
    <p>Content: ${req.body.content}</p>
    <p>Message: ${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "harsh6295@gmail.com", // generated ethereal user
      pass: "yesiamdiffrent" // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: req.body.email, // sender address
    to: "harsh6295@gmail.com", // list of receivers
    subject: "New Response", // Subject line
    text: "Hello world?", // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.render("contact", { msg: "Email has been sent" });
  });
});

app.listen(PORT, () => console.log("Server started at ..." + PORT));
