const express = require('express');
const controller = require('../controllers/directores');
const router = express.Router();

const path = 'directores';
router.get(`/${path}`, controller.getData);

module.exports = router;
