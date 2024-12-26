
const express = require("express");
const router = new express.Router();
const {getCartItemByUserId,addItemInCartByUserId,removeCartById,getCartItemCountByUserId} = require('../src/services/carts')


router.post("/addItemInCart",  addItemInCartByUserId);
router.get("/getItemInCart",  getCartItemByUserId);
router.get("/removeItemInCart",  removeCartById);
router.get("/cartCount",  getCartItemCountByUserId);

module.exports = router;