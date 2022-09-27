//Requires
const express = require("express");
const app = express();

const Flight = require("./models/Flight.js");

require("dotenv").config();

const mongoose = require("mongoose");

//Mongoose Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Set Up View Engine
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//Set Up Body Parser
app.use(express.urlencoded({ extended: false }));

//Routes

//Index
app.get("/flights", (req, res) => {
  Flight.find({}, (error, allFlights) => {
    res.render("Index", {
      flights: allFlights,
    });
  });
});

//create New route
app.get("/flights/new", (req, res) => {
  res.render("New"); //renders the view 'New' page
});

//Post
app.post("/flights", (req, res) => {
  Flight.create(req.body);
  res.redirect("/flights");
});

//Show

app.get("/flights/:id", (req, res) => {
  Flight.findOne({ _id: req.params.id }, (error, foundFlight) => {
    res.render("Show", {
      flight: foundFlight,
    });
  });
});

app.listen(3000, () => {
  console.log("listening");
});
