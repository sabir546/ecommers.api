// const { default: products } = require("razorpay/dist/types/products");
const Cart = require("../models/cart.model");
const Cartitem = require("../models/cartItem.model");
// const cartItem = require("../models/cartItem.model");
const Product = require("../models/product.model");

async function createCart(user) {
  try {
    const cart = new Cart({ user });
    const createdCart = await cart.save();
    return createdCart;
  } catch (error) {
    throw new Error(error.message);
  }
}
  async function findUserCart(userId) {
    try {
      let cart = await Cart.findOne({ user:user });
      let cartItems = await Cartitem
        .find({ cart:cart._id })
        .populate("product");
      cart.cartItems = cartItems;
      let totalPrice = 0;
      let totalDiscountedPrice = 0;
      let totalItem = 0;

      for (let cartItem of cart.cartItems) {
        totalPrice = cartItem.price;
        totalDiscountedPrice += cartItem.totalDiscountedPrice;
        totalItem += cartItem.quantity;
      }
      cart.totalPrice = totalPrice;
      cart.totalItem = totalItem;
      cart.discount = totalPrice - totalDiscountedPrice;
      return cart;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async function addCartItem(userId, req) {
    try {
      const cart = await Cart.findOne({ user: userId });
      const product = await Product.findById(req.productId);
      const isPresent = await Cartitem.findOne({
        cart: cart._id,
        product: product._id,
        userId,
      });
      if (!isPresent) {
        const cartItem = new Cartitem({
          product: product - _id,
          cart: cart._id,
          quantity: 1,
          userId,
          price: product.price,
          size: req.size,
          discountedPrice: product.discountedPrice,
        });
        const createdCartItem = await cartItem.save();
        cart.cartItems.push(createdCartItem);
        await cart.save()
        return "item added to cart"
      }
    } catch (error) {
      throw new Error(error.message);

    }
  }

module.exports = { createCart ,findUserCart,addCartItem};
