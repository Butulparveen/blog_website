const express = require("express");
const app = express();

app.use("/butul",(req,res)=>{
    console.log("This is the Backend URL");
})

app.listen("5000",()=>{
    console.log("Backend is up and running")
});