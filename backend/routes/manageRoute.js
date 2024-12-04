const express = require('express');
const router = express.Router();
const { manage } = require('../controllers/manageController');

router.get("/" , manage)

module.exports = router;