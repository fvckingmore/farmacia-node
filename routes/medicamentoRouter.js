var express = require('express');
var router = express.Router();
const medicamentoController = require('../controllers/medicamentoController.js')

router.get('/', medicamentoController.index);
router.post('/create/:id?', medicamentoController.create);
router.get('/edit/:id?', medicamentoController.edit);
router.post('/update/:id', medicamentoController.update);
router.post('/delete/:id', medicamentoController.delete);

module.exports = router;
