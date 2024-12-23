const express = require("express");
const router = new express.Router();
const {loginUser} = require('../src/services/Application')


router.post("/login",  loginUser);

module.exports = router;