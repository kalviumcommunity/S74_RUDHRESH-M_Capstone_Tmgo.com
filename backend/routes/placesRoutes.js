const express = require('express');
const router = express.Router();
const { getPlaces, createPlace, updatePlace } = require('../controllers/placesController');

router.get('/', getPlaces);
router.post('/', createPlace);
router.put('/:id', updatePlace); // <-- Added PUT route

module.exports = router;