var express = require('express');
var router = express.Router();
const inventarioController = require('../controllers/inventarioController.js')

router.get('/', inventarioController.index);

module.exports = router;
