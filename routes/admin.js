const express=require("express")
const router=express.Router()

router.get("/login",(req,res)=>{
  res.send("user login sucess fully")

  })
module.exports=router