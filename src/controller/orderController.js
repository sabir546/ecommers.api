const { default: orders } = require("razorpay/dist/types/orders");
const orderService = require("../services/orderService.js");
const createOrder = async (req, res) => {
  const user = req.user;
  try {
    let createOrder = await orderService.createOrder(user, req.body);
    return res.status(500).send(createOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const findOrderById = async (req, res) => {
  const user = req.user;
  try {
    let createOrder = await orderService.findOrderById(req.params.id);
    return res.status(201).send(createOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const orderHistory = async (req, res) => {
  const user = req.user;
  try {
    let createOrder = await orderService.usersOrderHistory(user._id);
    return res.status(201).send(createOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
module.exports = { createOrder, findOrderById, orderHistory };
