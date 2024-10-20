const Order = require("../models/orderModel");

const getAllOders = async () => {
  try {
    const allOrders = await Order.find({});
    return allOrders;
  } catch (error) {
    throw error;
  }
};

const createOrder = async (newOrder) => {
  try {
    await Order.create(newOrder);
  } catch (err) {
    throw err;
  }
};
const getOneOrder = async (orderId) => {
  try {
    const order = await Order.findById(orderId);
    return order;
  } catch (error) {
    throw error;
  }
};
const updateOrder = async (orderId, body) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(orderId, body);
    return updatedOrder;
  } catch (error) {
    throw error;
  }
};

const deleteOrder = async (orderId) => {
  try {
    await Order.findByIdAndDelete(orderId);
  } catch (error) {
    throw error;
  }
};
module.exports = {
  getAllOders,
  createOrder,
  getOneOrder,
  updateOrder,
  deleteOrder,
};
