const nodemailer = require('nodemailer');
const { development } = require('../config/config')

module.exports = {
  sendMail: async (email, subject, text, html) => {
    await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: true,
      port: 465,
      auth: {
        user: development.email,
        pass: development.emailPass,
      },
    });

    const info = await transporter.sendMail({
      from: development.email,
      to: email,
      subject: subject,
      text: text,
      html: html    //'<b>Hello dev</b>'
    });
    return(info);
  },
};
