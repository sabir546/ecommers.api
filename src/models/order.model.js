const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  orderItems: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "orderItems",
   
  }],

  orderDate: {
    type: Date,
    require:true,
    default: Date.now,
  },
  deliveryDate: {
    type: Date,
  },
  shippingAddress: {
    // You can define subfields like street, city, etc. as needed
    type: mongoose.Schema.Types.ObjectId,
    ref:"addresses",
  },
  paymentDetails: {
  paymentMethod:{
    type:String,
  },
  transactionId:{
    type:String,

  },
  paymentId:{
    type:String,

  },
  paymentStatus:{
    type:String,
default:"PENDING"
  }
  },
  totalPrice:{
    type:Number,
    require:true,
  },
  totalDiscountedPrice:{
    type:Number,
    require:true,
  },
discount:{
    type:Number,
    require:true,
  },
  orderStatus:{
    type:Number,
    require:true,
    default:"PENDING"
  },
  totalItem:{
    type:Number,
    require:true,
  },
  createdAt:{
    type:Date,
    default:Date.now()
  },

});

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;
