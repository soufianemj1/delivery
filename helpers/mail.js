const nodemailer = require("nodemailer");

const sendMail = async (email) => {
  try {
    let mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "testcoding975@gmail.com",
        pass: "testCoding1998",
      },
    });
    let mailDetails = {
      from: "testcoding975@gmail.com",
      to: email,
      subject: "Delivery",
      title: "YOU CENTER ADMIN PASSWORD",
      html: `<h3>You meight have a new</h3> <h1>Delivery</h1> go check <a href="http://insertview.com">drivers plateform</a>`,
    };

    mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        console.log("Error Occurs");
      } else {
        console.log("Email sent successfully");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendMail,
};
