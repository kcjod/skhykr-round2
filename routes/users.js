const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/crud");

const userModel = mongoose.Schema({
    studentName: String,
    studentId: String,
    department: String,
    email: {
      type: String,
      unique: true
    }
});


module.exports = mongoose.model("User", userModel);