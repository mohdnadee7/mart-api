const express = require('express');
const router = express.Router();

// Get all products
router.get('/', (req, res) => {
  const products = [
    { id: 1, name: 'Apple', price: 30 },
    { id: 2, name: 'Milk', price: 20 },
  ];
  res.json(products);
});

// Get a product by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, name: 'Sample Product', price: 50 });
});

// Add a new product
router.post('/', (req, res) => {
  const product = req.body;
  res.status(201).json({ message: 'Product added successfully', product });
});

module.exports = router;
