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
    riskProfile: {
      type: String,
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
    portfolio:[
      {
        savingFor:{
          type:String,
          default:''
        },
        portName:{
          type:String,
          default:''
        },
        target:{
          type:String,
          default:''
        },
        years:{
          type:String,
          default:''
        },
        starting:{
          type:String,
          default:''
        },
        monthly:{
          type:String,
          default:''
        },
        transactions:[
          { 
            amount:{
              type:String,
              default:''
            },
            withdraw:{
              type:String,
              default:''
            },
            total:{
              type:String,
              default:''
            },
            date:{
              type:Date,
              default:Date.now
            }
          },
          {
            timestamps: true,
          }
        ]
      }
    ]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
