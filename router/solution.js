const express = require("express");
const Solution = require("../model/solution");
const router = express.Router();


router.get("/solution", async (req, res) => {
  let result = await Solution.find();

  res.render("solution.html");
});

router.get("/aboutMl", async (req, res) => {
  // let result = await Solution.find();

  res.render("aboutMl.html");
});

router.get("/details", async (req, res) => {
  let result = await Solution.find();
  // console.log(result[0].defailId);
  res.render("details.html", {
    solutions: result,
  });
});

router.get("/mlDetails1", async (req, res) => {
  let result = await Solution.find({ column: /MES生产制造执行系统/ });
  // console.log(result, "22222222222222");
  res.render("mlDetails1.html", { solutions: result });
});

router.get("/mlDetails2", async (req, res) => {
  let result = await Solution.find({ column: /汽车行业/ });
  // console.log(result, "22222222222222");
  res.render("mlDetails2.html", { solutions: result });
});

router.get("/mlDetails3", async (req, res) => {
  let result = await Solution.find({ column: /橡塑制品行业/ });
  // console.log(result, "22222222222222");
  res.render("mlDetails3.html", { solutions: result });
});

router.get("/mlDetails4", async (req, res) => {
  let result = await Solution.find({ column: /电力成套行业/ });
  // console.log(result, "22222222222222");
  res.render("mlDetails4.html", { solutions: result });
});

router.get("/mlDetails5", async (req, res) => {
  let result = await Solution.find({ column: /模具行业/ });
  // console.log(result, "22222222222222");
  res.render("mlDetails5.html", { solutions: result });
});

router.get("/mlDetails6", async (req, res) => {
  let result = await Solution.find({ column: /新能源行业/ });
  // console.log(result, "22222222222222");
  res.render("mlDetails6.html", { solutions: result });
});

router.get("/mlDetails7", async (req, res) => {
  let result = await Solution.find({ column: /离散制造/ });
  // console.log(result, "22222222222222");
  res.render("mlDetails7.html", { solutions: result });
});

router.get("/details/:id", async (req, res) => {
  var defailId = req.params.id;
  // console.log(defailId);
  let result = await Solution.findOne({ "defailId": defailId });

  let prev = await Solution.findOne({ "defailId": { '$lt': defailId } }).sort({defailId: -1})
  let next = await Solution.findOne({ "defailId": { '$gt': defailId } }).sort({defailId: 1})

  res.render("detailed-infom1.html", { result, prev, next });
});


module.exports = router;
