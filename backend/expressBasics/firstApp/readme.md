// *express generator* 
// can give you all thes setup in an instance
// express generator ek folder bana ke deta h -> saare file ko
// isi folder mein daal ke dega

// *steps to use express generator*
// sabse pehle jeewan mein ek baar laptop pe install karo -g
// npm i express-generator -g
// to create new app anywhere:
// open cmd -> move to destop
// *create new app*
    // express appname --view=ejs
// now use two commands
    // cd appname
    // npm i 
    // open it on vscode

// *START APP*
    // just write npx nodemon









// *DATABASES*
// storehouse of your app's data -> db
// har naye app ka data store hoga storage mein,
// par ussey directly rakhne ki jagah ek container mein
// rakhenge, us container mein sirf us app ka data ayega
// types -> relational and non-relational dbs

/*
   CODE SIDE         MONGODB SIDE
   - db setup        - db formation 
   - model           - collection
   - schema          - documents
*/

ek db mein kayii "khand" hote hai
user data -> user ka khand -> user *collection*
but ye code mein banega as user *model*
models(code) => collection(db)

ek app ak poora data -> db
ek app mein variety of data hota hai par poora data app
ka hi hota hai, par us data ka subcategory -> collection

collection matlab saare users ka data, 
ek user ki baat kari to hua *document*

har document kaisa dikhega, ek bande ke pass kya kya
cheeze hongi wo define hoti hai *schema* ke dwara









// client mein *cookie* hoti hai aur server pe hota hai *session*

// *SESSIONS*
// need to install express-session
// app js m jaake necessary line likho :-

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "holabholaholabhola"
})) 

// session creation :-
req.session.koiBhiNaam = "koiBhiValue"; 

// read session :-
req.session.koiBhiNaam

// delete session :-
req.session.destroy()



// *COOKIES*
// setup express generator ne kia hua h

// creation :-
res.cookie("name", value)'

// cookie reading :-
req.cookies.name

// cookie deletion
req.clearCookie("name")