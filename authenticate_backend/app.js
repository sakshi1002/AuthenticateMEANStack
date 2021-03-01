const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 4000;

mongoose.connect('mongodb://localhost/MyUsers', {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true})
.then(console.log("Database Connected Succesfully!"))
 .catch(err=>{
     console.log(`Database Connection Failed! error:${err}`)
 })

 //Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My routes

const authRoutes = require("./routes/auth");

//My Routes

app.use("/api", authRoutes)

// app.get('/',(req,res)=>{
//      res.send('<h1>Hi I am Sakshi Gaikwad a full stack web developer!</h1>');
    
// })

app.listen(port,()=>{
    console.log(`Server running succesfully at port: ${port}`)
})


