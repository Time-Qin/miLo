const mongoose = require("mongoose");

const iconsSchema = new mongoose.Schema({
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

const Icon = mongoose.model("icon", iconsSchema, "icons")

module.exports = Icon;