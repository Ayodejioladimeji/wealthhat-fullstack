const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const sendMail = require('./sendMail');
const passwordMail = require('./passwordMail');
const { resetWatchers } = require('nodemon/lib/monitor/watch');

const { CLIENT_URL } = process.env;

const userCtrl = {
  // THE SECTION THAT REGISTERS USERS
  register: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, password } = req.body;

      // CHECK IF THE USER EMAIL ALREADY EXISTS
      const user = await User.findOne({ email });
      if (user)
        return res
          .status(400)
          .json({ msg: 'User already exists with that email address' });

      // PASSWORD ENCRYPTION
      const passwordHash = await bcrypt.hash(password, 12);

      const newUser = {
        email,
        password: passwordHash,
      };

      // Then create jsonwebtoken to authentication
      const activation_token = createActivationToken(newUser);

      const url = `${CLIENT_URL}/api/activation/${activation_token}`;

      sendMail(email, url, 'verify your email address');

      res.json({
        msg: 'Registration successful! Please check your email to activate your account',
        activation_token,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  // The section that activates user account
  activateEmail: async (req, res) => {
    try {
      const { activation_token } = req.body;
      const user = jwt.verify(
        activation_token,
        process.env.ACTIVATION_TOKEN_SECRET
      );

      const { email, password } = user;

      // Check if user already exists
      const check = await User.findOne({ email });
      if (check) return res.status(400).json({ msg: 'User Already Exists' });

      // creating the new user object
      const newUser = new User({
        email,
        password,
      });

      await newUser.save();

      res.json({ msg: 'Your Account has been activated' });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  // The section of the login
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

      // If login success , create refresh token
      const refresh_token = createRefreshToken({ id: user._id });

      res.cookie('refreshtoken', refresh_token, {
        httpOnly: true,
        path: '/api/refresh_token',
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30days
      });

      res.json({ msg: 'Login successful!', user });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  // The section of get access token
  getAccessToken: (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token)
        return res.status(400).json({ msg: 'Please Login to continue' });

      jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(400).json({ msg: 'Please Login again' });

        const access_token = createAccessToken({ id: user.id });

        res.json({ access_token });
      });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },

  // The section of the forgot password
  forgotPassword: async (req, res) => {
    try {
      const { email } = req.body;
      const user = await User.findOne({ email });
      if (!user)
        return res.status(400).json({ msg: 'This email does not exist!' });

      const access_token = createAccessToken({ id: user._id });
      const url = `${CLIENT_URL}/api/reset/${access_token}`;

      passwordMail(email, url, 'Reset your password');
      res.json({ msg: 'Please check your email to continue' });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },

  // The section of the reset password
  resetPassword: async (req, res) => {
    try {
      const { password } = req.body;
      const passwordHash = await bcrypt.hash(password, 12);

      await User.findOneAndUpdate(
        { _id: req.user.id },
        {
          password: passwordHash,
        }
      );

      res.json({ msg: 'Password changed successfully' });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },

  // The section that gets the single user Information
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      if (!user) return res.status(400).json({ msg: 'User does not exist' });

      res.json(user);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },

  // The section of the update users
  updateUser: async (req, res) => {
    try {
      const {
        title,
        firstname,
        lastname,
        gender,
        nationality,
        dayofbirth,
        monthofbirth,
        yearofbirth,
        phone,
        riskProfile,
        address,
        bvn,
        accountNumber,
        bank,
      } = req.body;

      await User.findOneAndUpdate(
        { _id: req.user.id },
        {
          title,
          firstname,
          lastname,
          gender,
          nationality,
          dayofbirth,
          monthofbirth,
          yearofbirth,
          phone,
          riskProfile,
          address,
          bvn,
          accountNumber,
          bank,
        }
      );

      res.json({ msg: 'Update Success' });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  // The section of the portfolio
  userPortfolio: async (req, res) => {
    try{
      const user = await User.findOne({_id: req.user.id})

      user.portfolio.unshift(req.body)

      await user.save()
      res.json(user)
    }
    catch(err){
      res.status(500).json({msg: err.message})
    }
  },

  // The section of the payment transactions
  payment:async (req, res) => {
    try{
      const user = await User.findOne({_id: req.user.id})


      user.portfolio.map(item => {
        return item.transactions.unshift(req.body)
      })

      await user.save()
      res.json({msg: "Transaction Successful ", user})
    }
    catch(err){
      res.status(500).json({msg: err.message})
    }
  },

  //  The section that logs out userCtrl
  logout: async(req, res) => {
    try {
      res.clearCookie('refreshtoken', {path: '/api/refresh_token'})
      return res.json({msg: "Logged Out"})
    } catch (error) {
      res.status(500).json({msg: error.message})
    }
  }
};

// ===============================================================

// Activation token
const createActivationToken = (payload) => {
  return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {
    expiresIn: '5m',
  });
};

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '1d',
  });
};

const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: '30d',
  });
};

module.exports = userCtrl;
