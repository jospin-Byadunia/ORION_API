const orderService = require("../services/orderSevice");

const getAllOders = async (req, res) => {
  try {
    const allOrders = await orderService.getAllOders();
    res.send({ status: "OK", data: allOrders });
  } catch (error) {
    throw error;
  }
};
const createOrder = (req, res) => {
  const newOrder = req.body;

  if (
    !newOrder.pickupLocation ||
    !newOrder.dropoffLocation ||
    !newOrder.service
  ) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "One of the following keys is missing or is empty in request body: 'pickupLocation', 'service','dropoffLocation'",
      },
    });
    return;
  }
  try {
    const createdOrder = orderService.createOrder(newOrder);
    res.send({ status: "OK", data: createdOrder });
  } catch (error) {
    throw error;
  }
};
const getOneOrder = async (req, res) => {
  let { orderId } = req.params;
  orderId = orderId.slice(1);
  if (!orderId) {
    res.send({
      status: "FAILED",
      data: { error: "Parameter ':orderId' can not be empty" },
    });
  }
  try {
    const order = await orderService.getOneOrder(orderId);
    res.send({ status: "OK", data: order });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
const updateOrder = async (req, res) => {
  const { body } = req;
  let { orderId } = req.params;
  orderId = orderId.slice(1);
  if (!orderId) {
    res.send({
      status: "FAILED",
      data: { error: "Parameter ':orderId' can not be empty" },
    });
  }
  try {
    const updatedOrder = await orderService.updateOrder(orderId, body);
    res.send({ status: "OK", data: updatedOrder });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
const deleteOrder = async (req, res) => {
  let { orderId } = req.params;
  orderId = orderId.slice(1);
  if (!orderId) {
    res.send({
      status: "FAILED",
      data: { error: "Parameter ':orderId' can not be empty" },
    });
  }
  try {
    await orderService.deleteOrder(orderId);
    res.status(204).send({ status: "OK" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllOders,
  createOrder,
  getOneOrder,
  updateOrder,
  deleteOrder,
};
