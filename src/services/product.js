const express = require('express');
const product  = require('../entites/product');
//const cloud  = require('../services/cloud');


const getProducts = async (req, res) => {
  try {
    const productList = await product.find({}, 'Price Name MRP Description Quantity StockQuantity ImageUrl').limit(3)
    //res.status(200).send(productList);
    // const productLists = productList.map(product => ({
    //   Price: product.Price,
    //   Name: product.Name,
    //   MRP: product.MRP,
    //   Description: product.Description,
    //   Quantity: product.Quantity,
    //   StockQuantity: product.StockQuantity,
    //   ImageUrl: "https://res.cloudinary.com/dhb4tjyau/image/upload/v1/"+product.ImageUrl
 // }));
  res.status(200).json(productList);
  } catch (error) {
    res.status(400).json(error);
  }
};


// // Get a product by ID
// router.get('/:id', (req, res) => {
//   const { id } = req.params;
//   res.json({ id, name: 'Sample Product', price: 50 });
// });

// // Add a new product
// router.post('/', (req, res) => {
//   const product = req.body;
//   res.status(201).json({ message: 'Product added successfully', product });
// });


module.exports = {
  getProducts
}
