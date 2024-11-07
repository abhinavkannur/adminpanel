const mongooose=require('mongoose')

const connectDb= async()=>{
  try{
    await mongooose.connect('mongodb://localhost:27017/userauth')
    console.log('mongo db connected')
  }catch(err){
    console.log(err)
  }


  }

  module.exports=connectDb
