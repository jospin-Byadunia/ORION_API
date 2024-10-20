const userService = require("../services/userService");

const getUsers = (req, res) => {
  try {
    const allUsers = orderService.getUsers();
    res.send({ status: "OK", data: allUsers });
  } catch (error) {
    throw error;
  }
};
const createUser = (req, res) => {
  const newUser = req.body;
  if (
    !newUser.name ||
    !newUser.email ||
    !newUser.password ||
    !newUser.phone ||
    !newUser.address
  ) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "One of the following keys is missing or is empty in request body: 'name', 'email','password', 'phone', 'address'",
      },
    });
    return;
  }
  try {
    const createdUser = userService.createUser(newUser);
    res.send({ status: "OK", data: createdUser });
  } catch (error) {
    throw error;
  }
};
const getOneUser = (req, res) => {
  const { userId } = req.params;
  if (!userId) {
    res.send({
      status: "FAILED",
      data: { error: "Parameter ':userId' can not be empty" },
    });
  }
  try {
    const user = userService.getOneUser(userId);
    res.send({ status: "OK", data: user });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
const updateUser = (req, res) => {
  const {
    body,
    params: { userId },
  } = req;
  if (!userId) {
    res.send({
      status: "FAILED",
      data: { error: "Parameter ':userId' can not be empty" },
    });
  }
  try {
    const updatedUser = userService.updateUser(userId, body);
    res.send({ status: "OK", data: updatedUser });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
const deleteUser = (req, res) => {
  const { userId } = req.params;
  if (!userId) {
    res.send({
      status: "FAILED",
      data: { error: "Parameter ':userId' can not be empty" },
    });
  }
  try {
    userService.deleteUser(userId);
    res.status(204).send({ status: "OK" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
