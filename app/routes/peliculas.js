const express = require('express');
const controller = require('../controllers/peliculas');
const router = express.Router();

const path = 'peliculas';
router.get(`/${path}`, controller.getData);

module.exports = router;
