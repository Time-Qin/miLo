// 装包 npm install express art-template bootstrap@3.3.5 express-art-template express-session mongoose jquery@2.2.0
const express = require("express");
const path = require("path")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const expressSession = require("express-session")
const da = require("./model/dataa")
const app = express();

app.use("/node_modules", express.static(path.join(__dirname, "node_modules")))
app.use("/image", express.static(path.join(__dirname, "image")))
app.use("/css", express.static(path.join(__dirname, "css")))
app.engine('html', require('express-art-template'));
//2.使用mongoose.connect()方法连接数据库
mongoose.connect('mongodb://localhost/milo');
//3.获取连接对象，通过连接对象来查看是否连接成功
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("已经连接数据库");
});

//4.创建一个Schema (Scheme中的字段是和数据库集合中的字段一一对应的)
var kittySchema = mongoose.Schema({
    name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);

app.get("/2",async(req,res)=>{
    var result =await da.findOne();
    console.log(result);
    res.render("2.html",{result});
    // res.send("11111")
});

app.listen(3000, () => {
    console.log("3000端口已启用")
})
