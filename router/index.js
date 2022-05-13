const express = require("express");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const path = require("path");
const mongoose = require("mongoose");
const User = require("../model/user");
const Product = require("../model/products");
const News = require("../model/news");
const router = express.Router();

router.get("/index",async (req, res) => {
    res.render("index.html");
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

module.exports = router;