const mongoose = require('mongoose');
const { Schema } = mongoose;

const subCategorySchema = new Schema({
  displayName: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  categoryId: {
    type: Number,
  },
  subCategory: {
    type: String,
  },
});

const subcategories = new mongoose.model("subcategories", subCategorySchema);

module.exports = subcategories;