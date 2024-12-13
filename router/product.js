const express = require("express");
const router = new express.Router();
const {getProducts} = require('../src/services/product')


router.get("/products",  getProducts);

module.exports = router;