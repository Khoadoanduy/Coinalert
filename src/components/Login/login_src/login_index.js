const express = require('express');
const collection = require("./config");
const bcrypt = require("bcrypt");

const app = express(); 
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "jsx"); // view html files easier

app.get('/', (req,res)=>{
    res.render("login");
});

app.get('/login_src/signup', (req,res) => {
    res.render("signup");
});

app.post("/signup",async  (req,res) => {
    const data = {
        name :req.body.username,
        password : req.body.password
    }
    const availUser = collection.findOne({name: data.name});
    if(availUser){
        res.send("User exits. Create another username"); 
    }
    else{ 
        const saltRounds = 10; 
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);
        data.password = hashedPassword; 
        const userdata = await collection.insertMany(data);
        console.log(userdata);
    }
})
app.post("/login", async (req, res) => {
    try {
        const check = await collection.findOne({ name: req.body.username });
        if (!check) {
            res.send("User name cannot found")
        }
        // Compare the hashed password from the database with the plaintext password
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if (!isPasswordMatch) {
            res.send("wrong Password");
        }
        else {
            res.render("home");
        }
    }
    catch {
        res.send("wrong Details");
    }
});


// Define Port for Application
const port = 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});