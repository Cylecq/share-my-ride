const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

transporter.sendMail(
  {
    from: "cassandra.juif@gmail.com",
    to: "johanna.stoicanescu@gmail.com",
    subject: "Reservation validated",
    text: "A user want to make a reservation with you !",
    html: "<p>A user want to make a reservation with you !</p>",
  },
  (err, info) => {
    if (err) console.error(err);
    else console.log(info);
  }
);

// module.exports = transporter;
