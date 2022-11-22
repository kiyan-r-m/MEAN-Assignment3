const express = require('express')
const app = express();
const router = require('./routes/router')
const connectDB = require("./config/connection")
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/vehicle', router)
app.use(express.static('./public'));
async function start(){
    try{
        await connectDB("mongodb://localhost:27017/vehiclesDB")
        app.listen(5000, console.log("app is listening on port 5000"))
    }
    catch(e){
        console.log(e);
    }
}

start();