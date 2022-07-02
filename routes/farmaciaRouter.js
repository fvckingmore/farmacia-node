var express = require('express');
var router = express.Router();
const farmaciaController = require('../controllers/farmaciaController.js')

router.get('/', farmaciaController.index);

module.exports = router;
