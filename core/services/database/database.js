const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://denise:PTbET6SxdrBAkXr@deniselinkapi.h99jl.mongodb.net/registeredUsers?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.Promise = global.Promise;

module.exports = mongoose;
