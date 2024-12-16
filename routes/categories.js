const express = require("express");
const router = new express.Router();
const {getCategories} = require('../src/services/category')


router.get("/category",  getCategories);

module.exports = router;