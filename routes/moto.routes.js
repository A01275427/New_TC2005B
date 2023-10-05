const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const motocicletasController = require('../controllers/moto.controller');

router.get('/add', isAuth, motocicletasController.get_add);
router.post('/add', isAuth, motocicletasController.post_add);
router.get('/list', isAuth, motocicletasController.get_list);
router.get('/list/:id', isAuth, motocicletasController.get_list);
router.get('/:id', isAuth, motocicletasController.get_list);
router.get('/', isAuth, motocicletasController.get_list);

module.exports = router;