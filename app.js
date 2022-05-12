// 装包 npm install express art-template bootstrap@3.3.5 express-art-template express-session mongoose jquery@2.2.0
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const expressSession = require('express-session');

const app = express();

app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/js", express.static(path.join(__dirname, "js")));
app.use("/images", express.static(path.join(__dirname, "images")));
app.engine('.html', require('express-art-template'));


app.get("/index",(req,res)=>{
    res.render("index.html")
})

app.listen(3000,()=>{
    console.log('服务器端口已启动！');
})