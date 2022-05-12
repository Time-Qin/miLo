const mongoose = require("mongoose");

const userScheme = mongoose.Schema({
    email: {
        type: String,
        validate: {
            validator: function (v) {
                return /^\w+@\w+\.\w+(\.\w+)?$/.test(v);
            },
            message: "邮箱格式不正确"
        },
        required: [true, '邮箱不能为空']
    },
    name: {
        type: String,
        required: [true, '用户名不能为空'],
        minlength: [4, '最小长度为4'],
        maxlength: [10, '最大长度为10']
    },
    tel:{
        type:String,
        validate: {
            validator: function (v) {
                return /^1[3,4,5,7,8][0-9]{9}$/.test(v);
            },
            message: "电话号码格式不正确"
        },
        required: [true, '电话号码不能为空']
    },
    textarea:{
        type:String,
        required: [true, '内容不能为空']
    }

})

const User = mongoose.model("user", userScheme, "user")
module.exports = User;
