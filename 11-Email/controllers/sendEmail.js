const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  const transporter = await nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const info = await transporter.sendMail({
    from: '"Abhaya Shankar" <shankarabhaya9@gmail.com>',
    to: "abhayacodes@gmail.com ",
    subject: "Testing Emails",
    text: "Testing Emails with Ethereal",
    html: "<h2> This is Working... </h2>",
  });

  res.status(200).json({ info });
};

module.exports = sendEmail;
