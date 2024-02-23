var express = require('express');
var router = express.Router();
const userModel = require('./users');

// using these lines a person would be able to login (using local strategy)
const passport = require("passport")
const localStrategy = require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));

// GET home page. 
router.get('/', function(req, res) {
  res.render('index');
});





//---------------------------------------------------------------------------------------------
//  Flash messages
router.get('/failed', (req,res)=>{
  // agar login hojaye toh login page ke baad profile page dikhado
  // agar naa ho to fir, mujhe is route se kisi aur route le jao
  // jaise ki '/error' and waha par dikhao "failed"

  // req.flash("naam", data);
  req.flash("age",22);
  res.send("bann gaya")
})


router.get('/checkkaro', (req, res)=>{
  console.log(req.flash("age"));
  res.send("check karlo backend ke terminal pe")
})
//---------------------------------------------------------------------------------------------------------







//----------------------------------------------------------------------------------------------------------
// MongoDB operations
router.get("/create", async (req, res)=>{
  let userData = await userModel.create({
    username: "abc",
    nickname: "sweetmasku",
    description: "I am created for clarity about regex.",
    categories: ['peace', 'clarity', 'regex'],
  })
  res.send(userData);
})


/*
  Q1. case insensitive exact match
  ^ -> shuruaat essi ho
  $ -> end essa ho
  e.g. ^hello$ -> matches with only hello

*/
router.get('/find', async (req, res)=>{
  // new RegExp(search, flags)
  var regex = new RegExp("^aBc$", "i");
  let user = await userModel.findOne({username: regex});
  res.send(user);
})




// Q2. find people with 'mern' category
router.get('/findCat', async (req, res)=>{
  let user = await userModel.find({ categories: {$all: ['mern', 'codeforces']} })
  res.send(user);
})




//Q3. find documents in a specific date range 
router.get('/findDate', async (req, res)=>{
  var date1 = new Date('2024-02-23');
  var date2 = new Date('2024-02-24');
  let user = await userModel.find({datecreated: {$gte: date1, $lte: date2}});
  res.send(user);
})




// Q4. filter documents based in the existence of a field 
router.get('/findExisting', async (req, res)=>{
  let user = await userModel.find({categories: {$exists: true}});
  res.send(user);
})




// Q5. Filter documents based on a specific field's length
router.get('/findLen', async (req, res)=>{
  let user = await userModel.find({
    $expr: {
      $and: [
        { $gte: [{$strLenCP: '$nickname'}, 0]},
        { $lte: [{$strLenCP: '$nickname'}, 5]},
      ]
    }
  });
  res.send(user);
})
//----------------------------------------------------------------------------------------------------------------------





//-----------------------------------------------------------------------------------------------------------------------
// auth and auth

router.get("/profile", isLoggedIn, (req,res)=>{
  res.render("profile")
})


router.post("/register", (req, res) => {
  // Create a new instance of the userModel
  let userdata = new userModel({
    username: req.body.username,
    secret: req.body.secret,
  });

  // Register the user
  userModel.register(userdata, req.body.password)
    .then(function (registereduser) {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/profile");
      });
    })
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/"
}), (req,res)=>{})

router.get("/logout", (req,res,next)=>{
  req.logout(function(err){
    if(err) return next(err);
    res.redirect("/");
  })
})

function isLoggedIn(req,res,next){
  // agar aap logged in ho to aage badho
  if(req.isAuthenticated()){
    return next();
  }
  // yaa main page pe wapas jao
  res.redirect("/");
}




module.exports = router;
