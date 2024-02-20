var express = require('express');
var router = express.Router();
const userModel = require("./users");
const { all } = require('../app');

//-------------------------------------------------------------------------------------------------------------------------------------------------
// Sessions
router.get("/", function(req,res){
  // session for your browser  
  // req.session.koiBhiNaam = "koiBhiValue"; 
  req.session.ban = true; 
  res.render("index");
})


router.get("/checkban", function(req,res){
  // can access sessions from any route
  if(req.session.ban==true){
    res.send("you are banned");
  } else{
    res.send("not banned")
  }
})


router.get("/removeban", function(req,res){
  req.session.destroy(function(err){
    if (err) throw err;
    res.send("ban removed")
  });
})
//-------------------------------------------------------------------------------------------------------------------------------------------------






//--------------------------------------------------------------------------------------------------------------------------------------------------
// Cookies
router.get("/cookie", function(req,res){
  res.cookie("age", 25);
  res.render("index")
})


router.get("/readcookie", function(req,res){
  console.log(req.cookies.age);
  res.send('check')
})


router.get("/deletecookie", function(req,res){
  res.clearCookie('age')
  res.send("cleared")
})
//---------------------------------------------------------------------------------------------------------------------------------------------------








//-------------------------------------------------------------------------------------------------------------------------------------------------
// create operation
router.get("/create", async function(req,res){
  // this is async, so this runs at the end -> to counter 
  // this we use async-await
  const createdUser = await userModel.create({
    username: "transform.translate",
    name: "achint",
    age: 22
  })   
  res.send(createdUser)
})


// findOne
router.get("/allUsers", async function(req,res){
  let allUsers = await userModel.findOne({username: "transform.translate"});
  res.send(allUsers);
})

// find all
router.get("/all", async function(req,res){
  let all = await userModel.find();
  res.send(all);
})


// deletion
router.get("/delete", async function(req,res){
  let deletedUser = await userModel.findOneAndDelete({username: "transform.translate"})
  res.send(deletedUser);
})
//-------------------------------------------------------------------------------------------------------------------------------------------------


module.exports = router;
