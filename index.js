const express = require('express');
const productRouter = require('./routes/product')
const cotegoryRouter = require('./routes/categories')
const subCotegoryRouter = require('./routes/subCategory')
const applicationRouter = require('./routes/application')
var cors = require("cors");
const { connectDatabase } = require("./src/repository/connection");
const app = express();
const port = process.env.Port || 3000;


// Middleware to parse JSON
app.use(cors());
app.use(express.json());
app.use("/api/v1", applicationRouter);
app.use("/api/v1", productRouter);
app.use("/api/v1", subCotegoryRouter);

const start = () => {
  connectDatabase()
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
    });
    app.get('/', (req, res) => {
      res.send('Welcome to DMART API!');
    });
};
start();
// Start server
app.listen(port, () => {
  console.log(`connection is live to this port ${port}`);
});

module.exports = app;