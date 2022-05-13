const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = express.Router();

router.get('/2',(req,res)=>{
    res.render('2.html')
})

module.exports = router;