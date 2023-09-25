const express = require('express');

const router = express.Router();

const motocicletasController = require('../controllers/moto.controller');


router.get('/add', motocicletasController.get_add);

router.post('/add', motocicletasController.post_add);
router.get('/list', motocicletasController.get_list);
router.get('/', motocicletasController.get_list);

module.exports = router;