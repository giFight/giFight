require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");




// Require all models
// var db = require("./models");
// require("./models/Article");

const PORT = process.env.PORT || 4000;

// Initialize Express
const app = express();

// Configure middleware


// Use body-parser for handling form submissions
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(routes)

if (process.env.NODE_ENV === "production"){
  // Use express.static to serve the client/build folder as a static directory
  app.use(express.static("client/build")); 
}
// Connect to the Mongo DB

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URL || "mongodb://localhost:27017/giFIghtDB";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);






// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});