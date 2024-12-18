const express = require("express");
const router = new express.Router();
const {getSubCategories} = require('../src/services/subCategory')


router.get("/subCategory",  getSubCategories);

module.exports = router;