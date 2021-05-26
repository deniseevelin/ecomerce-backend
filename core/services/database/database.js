const mongoose = require("mongoose");
const mongo =  process.env.MONGO_URL

mongoose.set("useCreateIndex", true);

mongoose.connect(
  mongo,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.Promise = global.Promise;

module.exports = mongoose;
