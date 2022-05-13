const mongoose = require("mongoose");

const productScheme = mongoose.Schema({
    id:Number,
    prdName:String,
    typeid:Number,
    type:String,
    imgSrc:String,
    des:Array
})

const Product = mongoose.model("product", productScheme, "product")
module.exports = Product;
