const express = require("expresss");
const mongoose = require("mongoose");
const config = require("../config/config.js");
const config1 = config.connect;
const webdata = require("../init/dataweb.js");
const websitedata = require("../models/webiste.js");;
console.log(config1.mongodburl);

// mongodb connection
main()
  .then(() => {
    console.log("the data is succesfully initiated");
  })
  .catch((err) => {
    console.log(`the data is not succesfully initiated ${err}`);
  });
  async function main() {
    await mongoose.connect(config1.mongodburl);
  }
  
const initdb = async () => {
  await websitedata.deleteMany({});
  await websitedata.insertMany(webdata);
  console.log("data has been inittiedted");
};
initdb()