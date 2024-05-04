const mongoose = require("mongoose");

// Replace <password> with your actual MongoDB Atlas database user password
const uri = "mongodb+srv://kcjod:kcjod123@test.uvdnnch.mongodb.net/";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB Atlas");
}).catch(err => {
  console.error("Error connecting to MongoDB Atlas:", err.message);
});

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
