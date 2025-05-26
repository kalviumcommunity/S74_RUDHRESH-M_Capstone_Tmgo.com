const express = require('express');
const router = express.Router();
const { getPlaces, createPlace, updatePlace } = require('../controllers/placesController');


router.get('/', getPlaces);
router.post('/create', createPlace);
router.put('/:id', updatePlace); 

module.exports = router;