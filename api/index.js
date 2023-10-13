const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute=require("./routes/auth");
const userRoute=require('./routes/users');

dotenv.config();
app.use(express.json()); // <-- Corrected this line

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify:true
  })

.then(console.log("Connected to mongodb"))
.catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users",userRoute);

app.use("/butul",(req,res)=>{
    console.log("This is the Backend URL");
})

app.listen("5000",()=>{
    console.log("Backend is up and running")
});