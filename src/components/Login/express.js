const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const port = 3002;
const userModel = require('./user');


const app = express();

app.use(express.json());
app.use(cors);

mongoose.connect("mongodb+srv://khoadoanduy05:khoadd05@market.4jywjcu.mongodb.net/users");

app.post('/register', (req,res) =>{
    userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err));
})
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})