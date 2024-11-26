const express = require('express');
const router = express.Router();
const { createProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/productController');

router.get("/", getProducts)
router.post("/", createProduct)
router.route("/:id")
    .put(updateProduct)
    .delete(deleteProduct)

module.exports = router;