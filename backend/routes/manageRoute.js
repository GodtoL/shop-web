const express = require('express');
const router = express.Router();
const { manage } = require('../controllers/loginController');

router.get("/" , manage)

module.exports = router;