const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  airline: { type: String, required: true },
  flightNo: { type: Number },
  departs: { type: String },
});

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;
