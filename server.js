const express = require("express");
const config = require("./config/config.js");
const path = require("path");
const app = express();
const config1 = config.connect;
const port1 = config1.port;
const databaseurl = config1.databaseurl;
const methodoveride = require("method-override");
const { name } = require("ejs");
const websitedata = require("./models/webiste.js");
const mongoose = require("mongoose");
const f1data = require("./models/enter.js");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "/views"));
app.use(methodoveride("_method"));
/////////////////////////////////////////////////////////
databasefunction()
  .then(() => {
    console.log("database connecte successfully");
  })
  .catch(() => {
    console.log("connection failed");
  });
async function databasefunction() {
  await mongoose.connect(config1.mongodburl);
}
console.log(config1.mongodburl);
/////////////////////////////////////////////////////////////
////////////for index page
////////////////////////////////////////////////////////////////

app.get("/admin", async (req, resp) => {
  const data1 = await websitedata.find({});
  resp.render("Admin.ejs", { data1 });
});

app.get("/admin/:id", async (req, resp) => {
  let { id } = req.params;
  const data3 = await websitedata.findById(id);
  resp.render("detail.ejs", { data3 });
});

/////////////////////////////////////////////////
app.get("/", (req, resp) => {
  resp.render("index.ejs");
});
app.post("/submitted", async (req, resp) => {
  const fd = await new f1data(req.body.f1data);
  await fd.save();
  const { name, email, contact } = req.body.f1data;
  console.log(req.body.f1data);
  resp.redirect("/create");
});

app.get("/create", (req, resp) => {
  resp.render("create.ejs");
});
app.post("/", () => { });

/////////////////////////////////////////////////

//////////////////////////////////////////////////////
////Data filling
app.get("/dataform", (req, resp) => {
  resp.render("dataform.ejs");
});
app.post("/data", async (req, resp) => {
  const {
    ownername,
    emailid,
    contact,
    companeyname,
    websitetype,
    description,
    featers,
    looginpage,
    logoutpage,
    budget,
    country,
  } = req.body;
  const d1 = await new websitedata(req.body.websitedata);
  await d1.save();
  console.log(req.body);
  resp.redirect("/submitted");
});
app.get("/submitted", (req, resp) => {
  resp.send("data is submitted");
});
////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
///////Edit the data
app.get("/admin/:id/edit", async (req, resp) => {
  let { id } = req.params;
  const edit1 = await websitedata.findById(id);
  resp.render("edit.ejs", { edit1 });
});

app.put("/admin/:id", async (req, resp) => {
  try {
    let { id } = req.params;
    await websitedata.findByIdAndUpdate(id, { ...req.body.websitedata });
    console.log("data is updated");
    resp.redirect(`/admin${id}`);
  } catch (error) {
    console.log("error occure", error);
    resp.status(500).send("error ocuuring");
  }
});
///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
app.listen(port1, () => {
  console.log(`http://localhost:${port1}/`);
});
