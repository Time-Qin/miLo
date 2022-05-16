const express = require("express");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const path = require("path");
const mongoose = require("mongoose");
const User = require("../model/user");
const Product = require("../model/products");
const News = require("../model/news");
const Smallimg = require("../model/smallimg");
const Da = require("../model/dataa")
const router = express.Router();

router.get("/index",async (req, res) => {
   let result=await News.find();
   let result_img=await Smallimg.find();
   console.log();
    res.render("index.html",{result,result_img});
  });

  router.get("/gw-index01",async (req, res) => {
    res.render("gw-index01.html");
  });
  router.get("/gw-Employees-work",async (req, res) => {
    res.render("gw-Employees-work.html");
  });
  
  router.get("/gw-zhaopin",async (req, res) => {
    res.render("gw-zhaopin.html");
  });

  router.get("/newsP1",async(req,res)=>{
    var result =await Da.findOne();
    console.log(result);
    res.render("newsP1.html",{result});
    // res.send("11111")
  });
  router.get("/newsP2",async(req,res)=>{
    res.render("newsP2.html");
  });
  router.get("/newsP3",async(req,res)=>{
    res.render("newsP3.html");
  });
  router.get("/news-01",async(req,res)=>{
    res.render("news-01.html");
  });
  router.get("/news-02",async(req,res)=>{
    res.render("news-02.html");
  });
  router.get("/news-03",async(req,res)=>{
    res.render("news-03.html");
  });
  router.get("/news-04",async(req,res)=>{
    res.render("news-04.html");
  });
  router.get("/news-05",async(req,res)=>{
    res.render("news-05.html");
  });
  router.get("/news-06",async(req,res)=>{
    res.render("news-06.html");
  });
  router.get("/news-07",async(req,res)=>{
    res.render("news-07.html");
  });
  router.get("/news-08",async(req,res)=>{
    res.render("news-08.html");
  });
  router.get("/news-09",async(req,res)=>{
    res.render("news-09.html");
  });
  router.get("/news-10",async(req,res)=>{
    res.render("news-10.html");
  });
  router.get("/news-11",async(req,res)=>{
    res.render("news-11.html");
  });
  router.get("/news-12",async(req,res)=>{
    res.render("news-12.html");
  });
  router.get("/news-13",async(req,res)=>{
    res.render("news-13.html");
  });
  router.get("/news-14",async(req,res)=>{
    res.render("news-14.html");
  });
  router.get("/news-15",async(req,res)=>{
    res.render("news-15.html");
  });
  router.get("/news-16",async(req,res)=>{
    res.render("news-16.html");
  });
  router.get("/news-17",async(req,res)=>{
    res.render("news-17.html");
  });
  router.get("/news-18",async(req,res)=>{
    res.render("news-18.html");
  });
  router.get("/news-19",async(req,res)=>{
    res.render("news-19.html");
  });
  router.get("/news-20",async(req,res)=>{
    res.render("news-20.html");
  });
  router.get("/news-21",async(req,res)=>{
    res.render("news-21.html");
  });
  router.get("/news-22",async(req,res)=>{
    res.render("news-22.html");
  });
  router.get("/dongtaiP1",async (req, res) => {
  res.render("dongtaiP1.html");
  });
  router.get("/dongtaiP2",async (req, res) => {
    res.render("dongtaiP2.html");
    });
  router.get("/zixunP1",async (req, res) => {
  res.render("zixunP1.html");
  });
module.exports = router;