var express = require('express');
var router = express.Router();
const userModel = require("./users");

//GET ROUTES
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get("/create", function(req,res){
  res.render("create");
});

router.get("/read", async function(req,res){

  const users = await userModel.find();

  res.render("read", {users: users});
});


router.get("/update", function(req,res){
  res.render("update");
});


router.get("/delete", function(req,res){
  res.render("delete");
});


router.get("/sdelete", function(req,res){
  res.render("sdelete");
});


// POST

router.post("/create",function(req,res,next){

  const user = userModel.create({
    studentName: req.body.studentName,
    studentId: req.body.studentId,
    department: req.body.department,
    email: req.body.email
  });

  res.redirect("/read");
});


router.post("/update", async function(req,res,next){

  const user = await userModel.findOne({email: req.body.email});

  user.studentName = req.body.studentName;
  user.department = req.body.department;
  user.studentId = req.body.studentId;

  await user.save();

  res.redirect("/read");
});

router.post("/delete", async function(req,res,next){

  const user = await userModel.findOneAndDelete({email: req.body.email});

  res.redirect("/sdelete");
});



module.exports = router;
