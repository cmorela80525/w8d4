const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  airline: { type: String },
  flightNo: { type: Number },
  departs: {
    type: Date,
    default: () => {
      let currentDate = new Date();
      let year = currentDate.getFullYear();
      let month = currentDate.getMonth();
      let day = currentDate.getDay();
      return new Date(year + 1, month, day)
    },
  },
});

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;
