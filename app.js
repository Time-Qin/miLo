// 装包 npm install express art-template bootstrap@3.3.5 express-art-template express-session mongoose jquery@2.2.0

const express = require("express");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const path = require("path");
const mongoose = require("mongoose");
const User = require("./model/user");
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
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/fonts", express.static(path.join(__dirname, "fonts")));
app.use("/tools", express.static(path.join(__dirname, "tools")));
app.use("/model", express.static(path.join(__dirname, "model")));
app.engine("html", require("express-art-template"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  expressSession({
    name: "lm",
    secret: "secret",
    cookie: {
      maxAge: 1000 * 60 * 3,
    },
    resave: false,
    rolling: true,
    saveUninitialized: false,
  })
);

app.get("/product", (req, res) => {
  res.render("lm-product.html");
});
app.get("/product/zhineng", (req, res) => {
  res.render("lm-product-zhineng.html");
});
app.get("/product/xitong", (req, res) => {
  res.render("lm-product-xitong.html");
});
app.get("/product/gaoduan", (req, res) => {
  res.render("lm-product-gaoduan.html");
});
app.get("/product/zhineng/zxxx", (req, res) => {
  res.render("lm-product-zhineng-zzzx.html");
});

app.get("/verifyCode", (req, res) => {
  // 创建验证码
  var captcha = svgCaptcha.create({
    color: true, // 彩色
    //inverse:false,// 反转颜色
    width: 60, //  宽度
    height: 28, // 高度
    fontSize: 30, // 字体大小
    size: 4, // 验证码的长度
    noise: 0, // 干扰线条
    ignoreChars: "0oO1ilI", // 验证码字符中排除 0o1i
    background: "#fff",
  });
  // console.log(captcha.data); svg 直接输出到页面
  // session里面也放一份
  req.session.captcha = captcha.text.toLowerCase();
  // cookie放一份
  res.cookie("captcha", req.session.captcha);
  res.send(captcha.data);
  // 往session，cookie中都存入一个验证码，并且把验证码显示在页面上
});

app.get("/connect", (req, res) => {
  res.render("lm-connect.html");
});

app.post("/connect", async(req, res,next) => {
  try{
    const { name, tel, email, textarea, captcha } = req.body;
  if (req.session.captcha == captcha) {
    req.session.destroy();
    var findUser = await User.findOne({ email });
    if (findUser) {
      User.findOneAndUpdate({ email }, { $set: { textarea } });
    } else {
      var user = new User(req.body);
      await user.save();
    }
    res.json({
      code: 2000,
      message: "评论成功",
    });
  } else {
    res.json({
      code: 2002,
      message: "验证码输入错误，请重新输入",
    });
  }
  }catch(err){
    next(err);
  }
});

app.use((err, req, res, next) => {
    res.json({
        code: 2002,
        message: err.message
    })
})
app.listen(3000, () => {
  console.log("3000端口已启用");
});
