var express = require('express');
var router = express.Router();
const laboratorioController = require('../controllers/laboratorioController.js')

router.get('/', laboratorioController.index);
router.post('/create/:id?', laboratorioController.create);
router.get('/edit/:id?', laboratorioController.edit);
router.post('/update/:id', laboratorioController.update);
router.post('/delete/:id', laboratorioController.delete);

module.exports = router;
