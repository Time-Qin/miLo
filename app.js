// 装包 npm install express art-template bootstrap@3.3.5 express-art-template express-session mongoose jquery@2.2.0
const express = require("express");
const path = require("path");
const lanmin = require("./router/lanmin");
const qin = require("./router/index");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost/miluo");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("已经连接数据库");
});

let svgCaptcha = require("svg-captcha");
// cookie
let cookoeParser = require("cookie-parser");
const { nextTick } = require("process");

app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
app.use("/fonts", express.static(path.join(__dirname, "fonts")));
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/model", express.static(path.join(__dirname, "model")));
app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/js", express.static(path.join(__dirname, "js")));
app.engine("html", require("express-art-template"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  expressSession({
    name: "lanmin",
    secret: "secret",
    cookie: {
      maxAge: 1000 * 60 * 3,
    },
    resave: false,
    rolling: true,
    saveUninitialized: false,
  })
);

app.use(lanmin);
app.use(qin);

app.use((err, req, res, next) => {
  res.json({
    code: 2002,
    message: err.message,
  });
});

app.listen(3000, () => {
  console.log("3000端口已启用");
});
