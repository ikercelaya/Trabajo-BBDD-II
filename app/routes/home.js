const express = require('express');
const controller = require('../controllers/home');
const router = express.Router();

const path = '';  // Home no necesita un path adicional
router.get(`/${path}`, controller.getData);

module.exports = router;
