const express= require("express")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    return res.status(200).send({message:"welcom to api" , status:true})
})

const authRouters=require('./routes/auth.routes')
app.use('/auth',authRouters)
const userRouters=require('./routes/user.route')
app.use('/users',userRouters)
module.exports=app