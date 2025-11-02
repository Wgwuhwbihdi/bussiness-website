const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appdataSchema = new mongoose.Schema({
  homepage: {
    type: String,
    reuired: true,
  },
  loginPage: {
    type: String,
    reqired: true,
  },
  videopage: {
    type: String,
    required: true,
  },
  musicPage: {
    type: String,
    required: true,
  },
  editor: {
    type: Number,
    reqired: true,
  },
  budget: {
    type: Number,
    required: true,
  },
    country:String,
});

const appdata = new mongoose.model("appdata", appdataSchema);
module.exports = appdata;
