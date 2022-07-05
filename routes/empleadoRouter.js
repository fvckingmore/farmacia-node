var express = require('express');
var router = express.Router();
const empleadoController = require('../controllers/empleadoController.js')

router.get('/', empleadoController.index);
router.post('/create/:id?', empleadoController.create);
router.get('/edit/:id?', empleadoController.edit);
router.post('/update/:id', empleadoController.update);
router.post('/delete/:id', empleadoController.delete);

module.exports = router;
