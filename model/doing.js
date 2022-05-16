const mongoose = require("mongoose");
const doShema = mongoose.Schema({
    title:String,
    content:String,
    anser:String
});

const Domodle = mongoose.model("doin",doShema,"doin");
module.exports = Domodle;
