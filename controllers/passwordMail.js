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
    
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    
        <style>
          .containers {
            max-width: 700px;
            margin: 0 auto;
            background: #fff;
          }
    
          .image-box {
            text-align: center;
            padding: 12px;
          }
    
          .container-one {
            background: #2e8c47;
            padding: 40px 10px;
          }
    
          .container-one p {
            text-align: center;
            font-size: 16px;
            text-transform: uppercase;
            font-family: monospace;
            color: #fff;
            font-weight: bold;
          }
    
          .container-one h1 {
            text-align: center;
            font-size: 27px;
            text-transform: uppercase;
            font-family: monospace;
            color: #fff;
          }
    
          .container-two {
            padding: 10px 15px;
            line-height: 25px;
          }
    
          .container-two p {
            font-family: monospace;
            text-align: center;
            font-size: 12px;
          }
    
          .inner-container {
            text-align: center;
            margin-top: 40px;
            margin-bottom: 20px;
          }
    
          .inner-container a button {
            background: #2e8c47;
            padding: 15px 50px;
            border: none;
            outline: none;
            color: #fff;
            font-weight: bold;
            cursor: pointer;
            border-radius: 5px;
          }
    
          /* THE SECTION OF THE MEDIA QUERY */
          @media screen and (max-width:500px){
            .container-one h1{
              font-size:20px;
            }
          }
    
        </style>
      </head>
      <body>
        <div class="containers">
          <div class="image-box">
            <img
              src="https://res.cloudinary.com/devsource/image/upload/v1642196531/wealthhat/wealth2_hgz58l.png"
              alt="logo"
              height="30"
              width="150"
            />
          </div>
    
          <div class="container-one">
            <p>Forgot your password?</p>
    
            <h1>Change Password Link</h1>
          </div>
    
          <div class="container-two">
            <p>
              You requested to reset your password, Please confirm the action by clicking the button below
            </p>
    
            <div class="inner-container">
              <a href="${url}">
                <button>${txt}</button>
              </a>
            </div>
    
    
            <small
              style="font-family: monospace; font-size:12px; margin-top: 40px">
              Sincerely, <br />
              The WealthHat Team
            </small
             >
    
            <hr />
            <p style="text-align: center; font-family: monospace">
              If you did not enter this email address when signing up for WealthHat,
              kindly disregard this message. Thanks!
            </p>
          </div>
        </div>
      </body>
    </html>
    

        `,
  };

  smtpTransport.sendMail(mailOptions, (err, infor) => {
    if (err) return err;
    return infor;
  });
};

module.exports = sendEmail;
