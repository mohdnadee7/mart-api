const express = require('express');
const app = express();
const port = 3000;

// Import route files
const productRoutes = require('./services/product');
const categoryRoutes = require('./services/category');

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/dmart', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database connection failed:', err));

// Use routes
app.use('/api/products', productRoutes);  // Base URL: /api/products
app.use('/api/categories', categoryRoutes);  // Base URL: /api/categories

// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to DMART API!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
