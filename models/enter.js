const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const firstpage = new Schema({
name:String,
email:String,
contact:Number
});

const fpage =  mongoose.model("firstpage", firstpage);
module.exports = fpage;
