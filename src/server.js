const express = require('express');

const connect = require("./config/db")
const app = express();
const usersController = require("./controllers/user.controller")
app.use(express.json())
app.use("/users",usersController)

const start = async()=>{
    await connect();
    app.listen(2323,(req,res)=>{
        console.log("Listening on Port 2323")
    })
}

module.exports = start;