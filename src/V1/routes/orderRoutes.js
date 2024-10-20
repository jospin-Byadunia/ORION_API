const express = require("express");
const orderController = require("../controllers/orderController");

const router = express.Router();
router
  .route("/")
  .get(orderController.getAllOders)
  .post(orderController.createOrder);
router
  .route("/:orderId")
  .get(orderController.getOneOrder)
  .patch(orderController.updateOrder)
  .delete(orderController.deleteOrder);

module.exports = router;
