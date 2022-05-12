const express = require("express");
const Solution = require("../model/solution");
const router = express.Router();

//仅仅只是来到商品页面
// router.get("/details", async (req, res) => {
//     // console.log("product")
//     const { pageindex = 1, limit = 5 } = req.query;
//     var skip = (pageindex - 1) * limit
//     let result = await Product.find().skip(skip).limit(limit);

//     let result2 = await Product.aggregate([
//         {
//             $group: {
//                 _id: null,
//                 count: { $sum: 1 }
//             }
//         }
//     ])
//     var totalPage = Math.ceil(result2[0].count / limit)
//     res.render("details.html", {
//         products: result,
//         totalPage: totalPage
//     })
// })

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
  // console.log(req.params);
  let result = await Solution.findOne({ "defailId": defailId });
  defailId = parseInt(defailId);
  let prevId = defailId - 1;
  let nextId = defailId + 1;
  let prev = await Solution.findOne({ "defailId": prevId });
  let next = await Solution.findOne({ "defailId": nextId });

  res.render("detailed-infom1.html", { result, prev, next });
});

// router.get("/topic/:id", async (req, res) => {
//   let topic = await Topic.findById(req.params.id);
//   console.log(topic);
//   res.render("topic/show.html", { topic , user : req.session.user});
// });

module.exports = router;
