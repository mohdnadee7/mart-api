const express = require('express');
const router = express.Router();

// Get all categories
router.get('/', (req, res) => {
  const categories = [
    { id: 1, name: 'Fruits' },
    { id: 2, name: 'Dairy' },
  ];
  res.json(categories);
});

// Add a new category
router.post('/', (req, res) => {
  const category = req.body;
  res.status(201).json({ message: 'Category added successfully', category });
});

module.exports = router;
