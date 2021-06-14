const express = require("express");
const consign = require("consign");
require("dotenv").config();
const cors = require("cors");
const errorHandler = require("./core/error-handler");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
consign().include("routes").into(app);
app.use(errorHandler);

app.listen(process.env.PORT || 3030, () => {
  console.log("Running on port 3030");
});
