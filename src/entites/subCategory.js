const mongoose = require('mongoose');
const { Schema } = mongoose;

const subCategorySchema = new Schema({
  DisplayName: {
    type: String,
  },
  ImageUrl: {
    type: String,
  },
  CategoryId: {
    type: Number,
  },
  SubCategory: {
    type: String,
  },
});

const subcategories = new mongoose.model("subcategories", subCategorySchema);

module.exports = subcategories;