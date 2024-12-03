const express = require('express');
const router = express.Router();
const { login, loginRender } = require('../controllers/loginController');

router.post("/" ,login)
router.get("/", loginRender)

module.exports = router;