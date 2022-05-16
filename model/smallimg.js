const mongoose = require("mongoose");

const simgScheme = mongoose.Schema({
    img_id:Number,
    img:String
});

const Small = mongoose.model("simg",simgScheme,"simg");

module.exports = Small;