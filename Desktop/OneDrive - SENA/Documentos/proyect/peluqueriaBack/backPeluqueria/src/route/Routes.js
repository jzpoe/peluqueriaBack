
const express = require('express');
const router = express.Router();
const apiController = require('../controllers/controllers');



router.get('/availableHors', apiController.disponiblesGet )
router.post('/sendFecha', apiController.disponiblesPost )


module.exports = router

