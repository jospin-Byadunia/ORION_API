const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    unique: true,
    required: true,
  },
  capacity: Number,
  driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  available: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
module.exports = Vehicle;
