const mongoose = require("mongoose");

const DestinationScehma = new mongoose.Schema({
  airport: { type: String, required: true },
  arrival: { type: Date, reqired: true },
});
