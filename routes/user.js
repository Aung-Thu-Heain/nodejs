const express = require('express');
const router = express.Router();
const controller =require('../controllers/user')
const {destroy} = require("../controllers/user");


router.get('/',controller.all)

router.post('/',controller.create)

router.post('/create-many',controller.createMany)

router.get('/:name',controller.getByName)

router.patch('/:id',controller.update)

router.delete('/:id',destroy)


module.exports = router;