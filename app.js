const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./models/connection");
const Register = require("./models/register");

const port = process.env.PORT || 5000;

const static_path = path.join(__dirname, "/public");
const template_path = path.join(__dirname, "/template/views");
const partials_path = path.join(__dirname, "/template/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);


app.get("/", (req, res) => { 
    res.render("index")
});

app.get("/index", (req, res) => { 
    res.render("index")
});

app.get("/register", (req, res) => {
    res.render("register");
})

app.get("/timetable", (req, res) => {
    res.render("timetable");
})

//create a new database user
app.post("/register",(req , res) =>{
    try {


            const registerUser = new Register({
                name : req.body.name,
                PRN : req.body.PRN,
                gender: req.body.gender,
                Sports : req.body.Sports,
                year : req.body.year,
                age : req.body.age,
                email : req.body.email,
                phone : req.body.phone
        })
            
       const registered = registerUser.save();
       res.status(201).render("index");


      


    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(port, () => {
    console.log(`server is running at port no. ${port}`);
})


