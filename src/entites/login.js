const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true,
      },
      Phone: {
        type: String,
        required: true,
        trim: true,
      },
      CreatedDate:{
        type:Date,
        default: Date.now,
      }
});

const login = new mongoose.model("users", loginSchema);

module.exports = login;