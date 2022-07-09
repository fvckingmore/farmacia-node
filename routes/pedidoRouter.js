var express = require('express');
var router = express.Router();
const pedidoController = require('../controllers/pedidoController.js')

router.get('/', pedidoController.index);
router.get('/show/:id?', pedidoController.show);
router.post('/create/:id?', pedidoController.create);
router.get('/edit/:id?', pedidoController.edit);
router.post('/update/:id', pedidoController.update);
router.post('/delete/:id', pedidoController.delete);

module.exports = router;
