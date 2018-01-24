const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const api = require("./api");
const app = express();
const PORT = process.env.PORT || 3002;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(api);

// Set up promises with mongoose
//mongoose.Promise = global.Promise;
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/accioFriends",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
