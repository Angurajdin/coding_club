const express = require('express');
const router = express.Router()
const API = require('../controllers/api');


router.get('/', API.login)
router.post('/signup',  API.signup)

module.exports = router;