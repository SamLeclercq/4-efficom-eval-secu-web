const express = require('express');
const router = express.Router();
const authController = require('./../controller/auth.controller.js');
const limiter = require('../middleware/limiting.js');


router.post('/login', authController.login);
router.post('/signin', authController.signIn);

module.exports = router;