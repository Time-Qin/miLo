// 装包 npm install express art-template bootstrap@3.3.5 express-art-template express-session mongoose jquery@2.2.0

const express = require("express");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const path = require("path");
const mongoose = require("mongoose");
const User = require("../model/user");
const Product = require("../model/products");
const router = express.Router();

let svgCaptcha = require("svg-captcha");
// cookie
let cookoeParser = require("cookie-parser");
const { nextTick } = require("process");

router.get("/product",async (req, res) => {
  let products = await Product.find().sort({ id:1 });
  res.render("product.html",{products});
});

router.get("/product/type:type",async(req,res)=>{
  let type=req.params.type;
  let products = await Product.find({"type":type}).sort({ id:1 });
  res.render("product-type.html",{products,type});
})

router.get("/product/:id",async(req,res)=>{
  let id=req.params.id;
  let product=await Product.findOne({"id":id});
  id=parseInt(id)
  let prevId=id-1;
  let nextId=id+1;
  let prev=await Product.findOne({"id":prevId});
  let next=await Product.findOne({"id":nextId});
  let products={product,prev,next}
  res.render("product-child.html",{products});
})

router.get("/cate/:id",async(req,res)=>{
  let id=req.params.id;
  let product=await Product.findOne({"id":id});
  res.render("cate.html",{product});
})

router.get("/verifyCode", (req, res) => {
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

router.get("/connect", (req, res) => {
  res.render("connect.html");
});

router.post("/connect", async(req, res,next) => {
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

module.exports = router;