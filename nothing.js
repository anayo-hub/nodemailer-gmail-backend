const nodemailer = require("nodemailer");

const signUp = async (req, res) => {
  try {
    let testAccount = await nodemailer.createTestAccount();

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: 'alena42@ethereal.email',
        pass: 'tGxDDcxdtPK4hQhEty'
      },
    });

    let message = {
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    };

    transporter
      .sendMail(message)
      .then(() => {
        return res.status(201).json({ msg: "You should receive an email" });
      })
      .catch((error) => {
        console.error(error);
        return res.status(500).json({ error: "Failed to send email" });
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  signUp,
};
