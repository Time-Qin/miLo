const mongoose = require("mongoose");

const newsScheme = mongoose.Schema({
    mil:String,
    new_name:String,
    time:String
})

const News = mongoose.model("new", newsScheme, "news")
module.exports = News;
