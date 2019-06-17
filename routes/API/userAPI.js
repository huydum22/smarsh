const express = require('express');
const router = express.Router();

const userAPIController = require('../../Controllers/API/userAPIController');

router.post('/updateUser',userAPIController.updateUser)
module.exports = router