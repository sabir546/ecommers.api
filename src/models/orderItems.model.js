
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  product: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"products",
    required: true
  },
  size: {
    type: String
    // You can define validation rules for size if needed
  },
  quantity: {
    type: Number,
    required: true,
    
  },
  price: {
    type: Number,
    required: true
  },
  discountedPrice: {
    type: Number,
    required: true

    // You can specify validation rules or default values for discounted price as needed
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  
});

const OrderItems = mongoose.model('orderItems', orderSchema);

module.exports = OrderItems;
