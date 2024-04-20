const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb+srv://khoadoanduy05:khoadd05@market.4jywjcu.mongodb.net/")

connect.then( () => {
    console.log("database successfully conencted");
})
.catch( (error)=> {
    console.log("database connection failed", error);
})

const LoginSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    }
})
const collection = new mongoose.model("users", LoginSchema);
module.exports = collection;