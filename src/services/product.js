const express = require('express');
const product  = require('../entites/product');
const cloud  = require('../services/cloud');


const getProducts = async (req, res) => {
  try {
    const productList = await product.find({}).limit(3);
    const productLists = productList.map(product => ({
      Price: product.Price,
      Name: product.Name,
      MRP: product.MRP,
      Description: product.Description,
      Quantity: product.Quantity,
      StockQuantity: product.StockQuantity,
      ImageUrl: cloud.url(product.ImageUrl)
 }));
  res.status(200).json(productLists);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getProducts
}
