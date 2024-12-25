const express = require("express");
const router = new express.Router();
const {getProducts,getProductById} = require('../src/services/product')


router.get("/products",  getProducts);
router.get("/getProductById",getProductById)

module.exports = router;