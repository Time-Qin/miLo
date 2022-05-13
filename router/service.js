const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = express.Router();
const icons = require("../model/icons")

// router.get('/service',(req,res)=>{
//     res.render('service.html')
// })
router.get("/service",async(req,res)=>{
  
    let result = await icons.find();
    res.render("service.html",{result})
   })

module.exports = router;
