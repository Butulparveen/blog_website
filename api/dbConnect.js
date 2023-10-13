const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");


dotenv.config();
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})
.then(console.log("Connected to mongodb"))
.catch((err)=>console.log(err));

app.use("/butul",(req,res)=>{
    console.log("This is the Backend URL");
})

app.listen("5000",()=>{
    console.log("Backend is up and running")
});