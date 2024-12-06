const express = require('express');
const router = express.Router();
const { manage, deleteOrder} = require('../controllers/manageController');
const authenticate = require('../middlewares/Authenticate')


router.get("/" , manage)
router.post("/delete/:id", deleteOrder)

module.exports = router;