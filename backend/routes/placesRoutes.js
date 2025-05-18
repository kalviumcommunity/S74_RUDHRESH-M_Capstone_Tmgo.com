const express = require('express');
const router = express.Router();
const { getPlaces } = require('../controllers/placesController');

router.get('/', getPlaces);

module.exports = router;
