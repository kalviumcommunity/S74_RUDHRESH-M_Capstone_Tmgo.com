const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String
});

module.exports = mongoose.model('Place', placeSchema);
