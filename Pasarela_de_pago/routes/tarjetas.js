const express = require('express');
const router = express.Router();

const tarjetaController = require('../controllers/tarjetasController');

router.get('/',tarjetaController.init);

router.get('/debito', tarjetaController.debt)

router.get('/credito', tarjetaController.cred)

module.exports = router;