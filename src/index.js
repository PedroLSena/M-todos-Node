const express =  require("express");
const path = require("node:path");

const app = express();
const PORT = 8080;

//definir a engine
app.set("view engine", "ejs");
//setar a pasta views
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended:true}));


app.get("/list", (req, res)=>{
    res.render("list");
    const emailuser = req.body.emailuser;
    console.log(emailuser);
    res.redirect("/list");
})
//renderizar a pagina index.js em views
app.get("/", (req, res)=>{
    res.render("index");
})

//deixar o server on
app.listen(PORT, ()=> console.log("Server On"));  