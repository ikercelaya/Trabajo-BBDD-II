const express = require('express');
const controller = require('../controllers/series');
const router = express.Router();

const path = 'series';
router.get(`/${path}`, controller.getData);

module.exports = router;
