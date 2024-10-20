const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  latitude: Number,
  longitude: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Location = mongoose.model("Location", locationSchema);
module.exports = Location;
