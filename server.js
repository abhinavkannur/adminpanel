//import 

const express=require('express')
const app=express()
const path=require("path")
const userroute=require('./routes/user')
const adminroutes=require('./routes/admin')
const { connect } = require('http2')
const connectDb = require('./db/mongodbconnect')

//view engine setup
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','hbs');
connectDb()


app.use('/user',userroute)
app.use('/admin',adminroutes)
app.listen(4000,()=>{
  console.log("server started")
})
