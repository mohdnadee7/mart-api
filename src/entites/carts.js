const mongoose = require('mongoose');


const cartSchema = new mongoose.Schema({
    UserId:{
        type:String,
        required: true,
    },
    ProductId:{
        type:String,
        required:true,
    },
    ProductCount:{
        type:Number,
        required:true,
        default:0
    },
    AddDate:{
        type:Date,
        default: Date.now,
    }
});

const cart = new mongoose.model("carts", cartSchema);

module.exports = cart;