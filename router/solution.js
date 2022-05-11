const express = require("express");
const Solution = require("../model/solution");
const router = express.Router();

router.use(
  expressSession({
    name: "crj",
    secret: "secret",
    cookie: {
      maxAge: 1000 * 60 * 3,
    },
    resave: false,
    rolling: true,
    saveUninitialized: false,
  })
);

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

router.get("/details", async (req, res) => {
  let result = await Solution.find();
  // console.log(result);
  res.render("details.html", {
    solutions: result,
  });
});

router.get("/mlDetails", async (req, res) => {
  let result = await Solution.find();
  console.log(result[0].column);
  console.log(result[0]);
  for (i = 0; i < result.length; i++) {
    if (result[i].column === "汽车行业") {
      req.session.user += result[i];
      // console.log(req.session.user);
      console.log(result[i].column, "1111111111");
    }
  }
  res.render("mlDetails.html", { results: req.session.user });
});

module.exports = router;
