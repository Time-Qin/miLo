// 装包 npm install express art-template bootstrap@3.3.5 express-art-template express-session mongoose jquery@2.2.0
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost/milo");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("已经连接数据库");
});

const solution = require("./router/solution");

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/views", express.static(path.join(__dirname, "views")));
app.engine("html", require("express-art-template"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  expressSession({
    name: "crj",
    secret: "secret",
    cookie: {
      maxAge: 1000 * 60 * 3,
    },
    resave: false,
    rolling: true,
    saveUninitialized: false,
  })
);

app.use(solution);

app.use(function (err, req, res, next) {
//   res.render("err.html", { errmsg: err.message });
});

app.listen(3000, () => {
  console.log("3000端口已启用");
});
