// 装包 npm install express art-template bootstrap@3.3.5 express-art-template express-session mongoose jquery@2.2.0
//1.npm install express mongoose
const express = require("express");
const path = require("path")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const expressSession = require("express-session")
const Topic = require("./model/dataa")
const app = express();

app.use("/node_modules", express.static(path.join(__dirname, "node_modules")))
app.engine('html', require('express-art-template'));
//2.使用mongoose.connect()方法连接数据库
mongoose.connect('mongodb://localhost/dataa');
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
//5.根据scheme,通过mongoose.model()方法得到一个Model,mongoose.model()方法的第一个参数是Model的名字，在实际数据库生成集合的名字中会多一个s
//代码中的Kitten这个model  对应数据库的这个Kittens集合
var Kitten = mongoose.model('Kitten', kittySchema);

//6.使用Model来创建对象，并且调用对象的save()方法将数据保存到数据库
app.get("/index", (req, res) => {
    var felyne = new Kitten({ name: 'Felyne' });
    felyne.save(function (err, felyne) {
        if (err) return console.error(err);
        console.log(felyne)
    });
    res.send("index")
});
app.get("/01",(req,res)=>{
    var result1 = Topic.findOne();
    console.log(result1);
    res.render("01.html",{result1});
});

app.listen(3000, () => {
    console.log("3000端口已启用")
})