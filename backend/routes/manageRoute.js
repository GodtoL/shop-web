const express = require('express');
const router = express.Router();
const { manage } = require('../controllers/manageController');
const authenticate = require('../middlewares/Authenticate')

router.get("/" , manage)

module.exports = router;