const express= require("express")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    return res.send("welcom to api")
})
module.exports=app