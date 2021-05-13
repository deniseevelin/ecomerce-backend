const express = require("express");
const consign = require("consign");
require("dotenv").config();
// const authMiddleware = require("./middleware/auth");
const cors = require("cors");

//start express in the app variable
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// app.use(authMiddleware);
consign().include("routes").into(app);

//port 3030
app.listen(process.env.PORT || 3030, () => {
  console.log("Running on port 3030");
});