const express = require("express");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const path = require("path");
const mongoose = require("mongoose");
const User = require("../model/user");
const Product = require("../model/products");
const router = express.Router();

router.get("/index",async (req, res) => {
    res.render("index.html");
  });

  router.get("/aboutMl",async (req, res) => {
    res.render("aboutMl.html");
  });
module.exports = router;