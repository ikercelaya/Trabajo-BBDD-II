const express = require('express');
const controller = require('../controllers/documentales');
const router = express.Router();

const path = 'documentales';
router.get(`/${path}`, controller.getData);

module.exports = router;
