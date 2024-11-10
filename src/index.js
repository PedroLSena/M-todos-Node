const express =  require("express");
const path = require("node:path");
const { execPath } = require("node:process");


const app = express();
const PORT = 8080;

//definir a engine
app.set("view engine", "ejs");
//setar a pasta views
app.set("views", path.join(__dirname, "views"));
app.use(express.static("Style"));

app.use(express.urlencoded({extended:true}));

let emails = [];

app.get("/list", (req, res)=>{
    res.render("list");
    const emailuser = req.body.emailuser;
    console.log(emailuser);
    res.redirect("/list");
});
app.post("/signup", (req, res)=>{
    const {email} = req.body;
    if(email){
        emails.push(email);
        res.redirect("/sucsses");
    }else{
        res.redirect("/");
    }
});

app.get("/sucsses",(req, res)=>{
    res.render("sucsses");
});

app.get("/",(req, res)=>{
    res.render("index");
})

app.get("/emails", (req, res)=>{
    res.render("emails", {emails:emails});
})
app.post("/emails/delete", (req, res)=>{
    const {email} = req.body;
    emails - emails.filter(i => i !== email);
    res.redirect("/emails")
})

//deixar o server on
app.listen(PORT, ()=> console.log("Server On"));  