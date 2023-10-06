const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const canVerMotos = require('../util/can-ver-motos');
const canAgregarMotos = require('../util/can-add-motos');
const motocicletasController = require('../controllers/moto.controller');

router.get('/add', isAuth, canAgregarMotos, motocicletasController.get_add);
router.post('/add', isAuth, canAgregarMotos, motocicletasController.post_add);
router.get('/list', isAuth, canVerMotos, motocicletasController.get_list);
router.get('/list/:id', isAuth, canVerMotos, motocicletasController.get_list);
router.get('/:id', isAuth, canVerMotos, motocicletasController.get_list);
router.get('/', isAuth, canVerMotos, motocicletasController.get_list);

module.exports = router;
