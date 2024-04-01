const express = require("express")
const app = express()
const axios = require("axios")
const bodyParser = require('body-parser')

var cors = require('cors')

app.use(cors())
app.use(bodyParser.json()) // support json encoded
app.use(express.static('public'))
app.get("/api", async (req,res)=>{
    const cmcRes = await axios.get("https://api.coincap.io/v2/assets")
    const data = cmcRes.data
    // console.log(data)
    res.json(data)
})

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/home.html")
})

app.listen(3001, ()=>{
    console.log("App started on 3001")
})