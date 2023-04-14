const sgMail = require("@sendgrid/mail");

require("dotenv").config();

const sendVarifacateEmail = async (email, url) => {
  
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: email,
      from: process.env.SENDGRID_API_USER,
      subject: "Send verifacate Token",
      text: `${url}`,
      html: `<a>${url}</a>`,
    };

    sgMail.send(msg);

    return { status: 200, msg: "Verification email sent" };
  } catch (error) {
    console.log(error);
    return { status: 500, msg: "Bek can`t send verifacate email" };
  }
};
module.exports = sendVarifacateEmail;
