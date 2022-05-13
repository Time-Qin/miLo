// 装包 npm install express art-template bootstrap@3.3.5 express-art-template express-session mongoose jquery@2.2.0

const express = require('express');
const path = require('path');
const app = express();
const mongoose = require("mongoose")
const icons = require("./model/icons")

const service = require("./router/service")

mongoose.connect("mongodb://127.0.0.1/miluo")
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("已经连接数据库");
});

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/model", express.static(path.join(__dirname, "model")));
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
app.engine('html', require('express-art-template'));

app.use(service)

app.use(express.static(path.join(__dirname,'public')))
app.listen(3000,()=>{
    console.log('App listening at port 3000');
})
