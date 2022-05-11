// 装包 npm install express art-template bootstrap@3.3.5 express-art-template express-session mongoose jquery@2.2.0

const express = require('express');
const path = require('path');
const app = express();

const service = require("./router/service")

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
app.engine('html', require('express-art-template'));


app.use(express.static(path.join(__dirname,'public')))
app.listen(3000,()=>{
    console.log('App listening at port 3000');
})


app.use(service)
