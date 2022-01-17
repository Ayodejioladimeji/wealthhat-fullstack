const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    firstname: {
      type: String,
      default: '',
      trim: true,
    },
    lastname: {
      type: String,
      default: '',
      trim: true,
    },
    gender: {
      type: String,
      default: '',
    },
    nationality: {
      type: String,
      default: '',
    },
    dayofbirth: {
      type: String,
      default: '',
    },
    monthofbirth: {
      type: String,
      default: '',
    },
    yearofbirth: {
      type: String,
      default: '',
    },
    phone: {
      type: Number,
      default: '',
    },
    address: {
      type: String,
      default: '',
    },
    bvn: {
      type: Number,
      default: '',
    },
    accountNumber: {
      type: Number,
      default: '',
    },
    bank: {
      type: String,
      default: '',
    },
    role: {
      type: Number,
      default: 0, // 0=user, 1=admin
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
