


/*
    THEORY-----------------------------------------------------------------------------
    
    - req 
    req mein saara data hota hai aane wale user ki request ki 
    taraf se, jaise ki uski location, device info and other things



    - res 
    res mein controls hote hai jinke basis pe hum server se  
    response bhej paate hai



    - next
    control agar middleware par gaya toh wo khud se agle route
    ya middleware par nahi jayega usko push karna padega 
    ye push karne ke liye hume 'next' chalana hota hai



    - route parameters
    to make any route dynamic you can use ':' at the place where
    you want to make it dynamic, amd to access their values
    we can use req.params



    - dynamic routing
    aisa koi bhi route jiska koi hissa baar baar same rehta hai
    aur kuuch hissa baar baar change hota hai uske lie hume
    dynamic route banana padta hai e.g. :-
    /profile/harshit
    /profile/harshita
    /profile/achint

    /profile/:username -> /routeName/:params 
    if there exists a colon in the url, we can access 
    the params using backticks -> ${req.params.username}
    


    - template engines
    ek markup style jo ki baad mein html mein convert ho jayegi



    - ejs
    html ke pass superpowers nahi hai calculation karne ki
    ejs is html with superpowers -> can do js inside html
    steps to setup ejs:- 

    1) ejs install
    npm i ejs

    2) configure ejs
    app.set("view engine", "ejs");

    3) ek views naam ka folder banao

    4) usme ejs files banao

    5) send ki jagah render karo
    render karte waqt make sure app views folder ke 
    andar wali hi file ka naam likhien and render fn
    mein ".ejs" mention na karein



    - static files
    images, stylesheet, frontend js
    static files ko setup karke ke liye:-

    1) create a folder called public

    2) create 3 folders inside public -> images, stylesheets, javascripts

    3) configure the express static in script.js file

    4) understand the path

*/

const { name } = require('ejs');
const express = require('express')
const app = express()


//-----------------------------------------------------------------------------------------------------
// Middlewares

app.use(express.static('./public')); //public ke sath path ka issue hai yaad rakhna

app.use(function(req, res, next){
    console.log("hi from middleware")
    next();
})





//--------------------------------------------------------------------------------------------------------
// ejs

app.set("view engine", "ejs");




//--------------------------------------------------------------------------------------------------------
// Routes

// default route
// app.get('/', function(req, res){
//     res.send('Gedi route')
// })



// default route w/ ejs
app.get("/", function(req, res){
    res.render("index", {age:21})
})




// about page
app.get("/contact", function(req, res){
    res.render("contact", {name: "achint"})
})




//profile route
app.get('/profile', function(req, res){
    res.send('Hellow from profile')
})




// dynamic profile route
app.get('/profile/:username', function(req, res){
    res.send(`Hellow from ${req.params.username}`)
})




// error handling
app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  })

app.listen(3000)



