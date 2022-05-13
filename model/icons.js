const mongoose = require("mongoose");

var iconsSchema = new mongoose.Schema({
    name: {
        type: String
    },
    icon: {
        type: String
    },
    title:{
        type: String,
    }
})

var Icon = new mongoose.model("icon", iconsSchema, "icons")

module.exports = Icon;