const mongoose = require("mongoose");

const product = new mongoose.Schema({
    Name: {
    type: String,
    required: true,
    trim: true,
  },
  Description: {
    type: String,
    required: true,
    trim: true,
  },
  Price: {
    type: Number,
  },
  MRP: {
    type: Number,
  },
  ImageUrl: {
    type: String,
    required: true,
    trim: true,
  },
  CategoryId: {
    type: String,
  },
  StockQuantity:{
    type:Number
  },
  Quantity:{
    type:String
  }
});

//Creating collection in data base
const products = new mongoose.model("products", product);

module.exports = products;
