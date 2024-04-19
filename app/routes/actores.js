const express = require('express');
const controller = require('../controllers/actores');
const router = express.Router();

const path = 'actores';
router.get(`/${path}`, controller.getData);

module.exports = router;
