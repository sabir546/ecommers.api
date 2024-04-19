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
app.use('/api/users',userRouters)

const productRouter=require('./routes/product.routes.js')
app.use('/api/products',productRouter)

const adminProductRouters=require('./routes/adminProductRoutes.js')
app.use('/api/admin/products',adminProductRouters)

const cardRouter=require('./routes/cards.routes.js')
app.use('/api/cart',cardRouter)


const cardItemRouters=require('./routes/cartItems.routes.js')
app.use('/api/cartItems',cardItemRouters)


const orderRouter=require('./routes/order.routes.js')
app.use('/api/orders',orderRouter)

const reviewRouter=require('./routes/review.routes.js')
app.use('/api/reviews',reviewRouter)

const ratingRouter=require('./routes/rating.routes.js')
app.use('/api/rating',ratingRouter)

const adminOrderRouters=require('./routes/admineOrder.routes.js')
app.use('/api/admin/order',adminOrderRouters)
module.exports=app