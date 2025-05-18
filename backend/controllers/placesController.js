const Place = require('../models/Place');

const getPlaces = async (req, res) => {
  try {
    const places = await Place.find();
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getPlaces };
