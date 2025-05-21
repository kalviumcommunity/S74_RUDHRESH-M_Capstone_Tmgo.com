const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  placeId: { type: mongoose.Schema.Types.ObjectId, ref: "Place", required: true },
  transportType: { type: String, enum: ["bus", "train", "cab", "bike"], required: true },
  travelDate: { type: Date, required: true },
  status: { type: String, enum: ["booked", "cancelled", "completed"], default: "booked" }
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
