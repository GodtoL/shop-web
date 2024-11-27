const express = require('express');
const router = express.Router();
const { createProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/productController');
const authenticate = require('../middlewares/Authenticate')

router.get("/", authenticate, getProducts)
router.post("/", authenticate, createProduct)
router.route("/:id")
    .put(updateProduct)
    .delete(deleteProduct)

module.exports = router;