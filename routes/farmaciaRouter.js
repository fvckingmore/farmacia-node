var express = require('express');
var router = express.Router();
const farmaciaController = require('../controllers/farmaciaController.js')

router.get('/', farmaciaController.index);
router.post('/create/:id?', farmaciaController.create);
router.get('/edit/:id?', farmaciaController.edit);
router.post('/update/:id', farmaciaController.update);
router.post('/delete/:id', farmaciaController.delete);

module.exports = router;
