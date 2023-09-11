const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  phone: {
    type: Number,
  },
  phone: {
    type: Number,
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
  },
  date: {
    type: Date,
  },
  addressl1: {
    type: String,
  },
  addressl2: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  pincode: {
    type: Number,
  },
  problem: {
    type: String,
  },
  medications: {
    type: String,
  },
  allergies: {
    type: String,
  },
  describe: {
    type: String,
  },
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
});

const Survey = new mongoose.model("survey",schema);
module.exports=Survey;
