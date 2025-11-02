const express = require("expresss");
const mongoose = require("mongoose");
const config = require("../config/config.js");
const config1 = config.connect;
const modelfpage = require("../models/enter.js");
const firstpage = require("../init/firstpage.js");
console.log(config1.mongodburl);

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

const finitdb = async () =>{
  await modelfpage.deleteMany({});
  await modelfpage.insertMany(firstpage);
  console.log("fpage data is also inited")
};

finitdb()
