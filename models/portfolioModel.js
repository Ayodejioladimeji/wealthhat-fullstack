const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const portfolioSchema = new mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: 'User',
    },
    savingFor: {
      type: String,
      required: true,
      trim: true,
    },
    portName: {
      type: String,
      required: true,
      trim: true,
    },
    target: {
      type: String,
      required: true,
      trim: true,
    },
    years: {
      type: String,
      required: true,
    },
    starting: {
      type: String,
      required: true,
    },
    monthly: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Portfolio', portfolioSchema);
