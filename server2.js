const express = require('express')
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
const users = []
const mongodburl1 = require("./config/config.js")
const data1 = mongodburl1.connect

app.get("/",(res,resp)=>{
  resp.render("red.ejs")
})

app.get("/success",(req,resp)=>{
resp.render("success.ejs")
})
app.post("/",(req,resp)=>{
  console.log(req.body)
  users.push({name:req.body.name,email:req.body.email,number:req.body.number})
  resp.redirect("/success")
})

app.get("/users",(req,resp)=>{
  resp.json({users,    
  })
  Console.log("server is running")
})

app.listen(5001)