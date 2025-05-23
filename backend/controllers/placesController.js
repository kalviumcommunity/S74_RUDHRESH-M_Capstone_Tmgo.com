const Place = require('../models/Place');

// GET All Places (Already exists)
const getPlaces = async (req, res) => {
  try {
    const places = await Place.find();
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST - Add New Place
const createPlace = async (req, res) => {
  const { name, description, location } = req.body;

  try {
    const newPlace = new Place({ name, description, location });
    await newPlace.save();
    res.status(201).json(newPlace);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


// PUT - Update Place by ID
const updatePlace = async (req, res) => {
  const { id } = req.params;
  const { name, description, location } = req.body;

  try {
    const updatedPlace = await Place.findByIdAndUpdate(
      id,
      { name, description, location },
      { new: true }
    );

    if (!updatedPlace) {
      return res.status(404).json({ message: 'Place not found' });
    }

    res.status(200).json(updatedPlace);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


module.exports = { getPlaces, createPlace, updatePlace};
