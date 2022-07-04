var express = require('express');
var router = express.Router();
const farmaciaController = require('../controllers/farmaciaController.js')

router.get('/', farmaciaController.index);
router.post('/create', farmaciaController.create);

module.exports = router;
