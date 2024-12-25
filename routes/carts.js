
const express = require("express");
const router = new express.Router();
const {getCartItemByUserId,addItemInCartByUserId,removeCartById} = require('../src/services/carts')


router.post("/addItemInCart",  addItemInCartByUserId);
router.get("/getItemInCart",  getCartItemByUserId);
router.post("/removeItemInCart",  removeCartById);

module.exports = router;