const mongoose = require("mongoose");

const solutionSchema = new mongoose.Schema({
  column: {
    type: String,
  },
  time: {
    type: String,
  },
  title: {
    type: String,
  },
  img1: {
    type: String,
  },
  img2: {
    type: String,
  },
  industry: {
    type: String,
  },
  scenario: {
    type: String,
  },
  solution1: {
    type: String,
  },
  solution2: {
    type: String,
  },
  highlights: {
    type: String,
  },
  defailId:{
    type:String
  }
});

const Solution = mongoose.model("solution", solutionSchema, "solutions");

module.exports = Solution;
