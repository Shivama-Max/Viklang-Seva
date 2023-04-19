const express= require('express');
require('dotenv').config();
var bodyParser = require('body-parser');
const cors=require("cors");
const db=require("./db/db.js");
const userRouter=require('./routes/routes.js');


const app=express()
const port=process.env.PORT

const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200,
 }
 
 app.use(bodyParser.urlencoded({ extended: false }))

 app.use(bodyParser.json())
 
 app.use(express.urlencoded({ extended: true }))
 

app.use(cors(corsOptions))
app.use(express.json())
app.use(userRouter)

app.listen(port,()=>{
    console.log('Server is up on the port '+port+" !")
})