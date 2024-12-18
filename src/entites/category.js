const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
    name: String,
});

const categories = new mongoose.model("categories", categorySchema);

module.exports = categories;