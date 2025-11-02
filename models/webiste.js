const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const websiteSchema = new Schema({
  ownername:String,
  emailid:String,
  contact:Number,
  companeyname: String,
  websitetype: String,
  description: String,
  featers: String,
  looginpage: String,
  logoutpage: String,
  budget:Number,
  country: String,
});

const websitedata = mongoose.model("websiteSchema", websiteSchema);
module.exports = websitedata;
