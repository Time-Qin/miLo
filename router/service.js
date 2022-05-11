const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = express.Router();

router.get('/service',(req,res)=>{
    // console.log(1111);
    res.render('service.html')
})

module.exports = router;
