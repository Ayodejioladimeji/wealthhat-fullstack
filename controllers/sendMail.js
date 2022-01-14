const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const { OAuth2 } = google.auth;
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';

const {
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  SENDER_EMAIL_ADDRESS,
} = process.env;

const oauth2Client = new OAuth2(
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  OAUTH_PLAYGROUND
);

// send mail
const sendEmail = (to, url, txt) => {
  oauth2Client.setCredentials({
    refresh_token: MAILING_SERVICE_REFRESH_TOKEN,
  });

  const accessToken = oauth2Client.getAccessToken();
  const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: SENDER_EMAIL_ADDRESS,
      clientId: MAILING_SERVICE_CLIENT_ID,
      clientSecret: MAILING_SERVICE_CLIENT_SECRET,
      refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
      accessToken,
    },
  });

  const mailOptions = {
    from: SENDER_EMAIL_ADDRESS,
    to: to,
    subject: 'Wealthhat',
    html: `
    
     <div style="max-width: 700px; margin: 0 auto" background:#fff;>
      <div style="text-align: center; padding: 12px">
        <img
          src="https://res.cloudinary.com/devsource/image/upload/v1642196531/wealthhat/wealth2_hgz58l.png"
          alt="logo"
          height="30"
          width="150"
        />
      </div>

      <div style="background: #2e8c47; padding: 40px 10px">
        <p
          style="
            text-align: center;
            font-size: 16px;
            text-transform: uppercase;
            font-family: monospace;
            color: #fff;
            font-weight: bold;
          "
        >
          YOU ARE ONE STEP AWAY
        </p>

        <h1
          style="
            text-align: center;
            font-size: 27px;
            text-transform: uppercase;
            font-family: monospace;
            color: #fff;
          "
        >
          Verify Your Email Address
        </h1>
      </div>

      <div style="padding: 10px 15px; line-height: 25px">
        <p style="font-family: monospace; text-align: center; font-size: 12px">
          You are almost ready to start enjoying our predefined services, Simply
          click the button below to verify your email address.
        </p>

        <div style="text-align: center; margin-top: 40px; margin-bottom: 20px">
          <a href="${url}">
            <button
              style="
                background: #2e8c47;
                padding: 15px 50px;
                border: none;
                outline: none;
                color: #fff;
                font-weight: bold;
                cursor: pointer;
                border-radius: 5px;
              "
            >
              ${txt}
            </button>
          </a>
        </div>

        <p style="font-family: monospace; text-align: center; font-size: 12px">
          Once we've verified your email address, you can fund your account and
          start investing!
        </p>

        <p style="font-family: monospace; margin-top: 40px">
          Sincerely, <br />
          The WealthHat Team
        </p>

        <hr />
        <p style="text-align: center; font-family: monospace">
          If you did not enter this email address when signing up for WealthHat,
          kindly disregard this message. Thanks!
        </p>
      </div>
    </div>

        `,
  };

  smtpTransport.sendMail(mailOptions, (err, infor) => {
    if (err) return err;
    return infor;
  });
};

module.exports = sendEmail;
