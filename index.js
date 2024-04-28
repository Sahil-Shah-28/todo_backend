const express = require("express");

const app=express()

const PORT=8000

app.set("view engine","ejs")

app.listen(PORT,"127.0.0.1",()=>{
    console.log("Server connected !!!!!")
})