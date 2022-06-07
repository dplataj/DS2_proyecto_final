const express = require('express');
const router = express.Router();

const tarjetaController = require('../controllers/tarjetasController');

router.get('/',tarjetaController.init);

router.get('/debito', tarjetaController.debt)

router.get('/credito', tarjetaController.cred)

router.get('/tarjeta', tarjetaController.list)

router.get('/transaccion', tarjetaController.listTran)

router.post('/add', tarjetaController.save)

router.get('/exito', tarjetaController.exito)

router.get('/fail', tarjetaController.fail)

router.get('/saldo', tarjetaController.view)

router.post('/saldoConsulta', tarjetaController.consultar)

router.get('/resultadoConsulta', tarjetaController.resultadoConsulta)

module.exports = router;