const express = require('express');
const product  = require('../entites/product');
//const cloud  = require('../services/cloud');


const getProducts = async (req, res) => {
  try {
    const productList = await product.find({}).limit(3);
    //res.status(200).send(productList);
//     const productLists = productList.map(product => ({
//       Price: product.Price,
//       Name: product.Name,
//       MRP: product.MRP,
//       Description: product.Description,
//       Quantity: product.Quantity,
//       StockQuantity: product.StockQuantity,
//       ImageUrl: "https://res.cloudinary.com/dhb4tjyau/image/upload/v1/"+product.ImageUrl
//  }));
  res.status(200).send(productList);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getProducts
}
