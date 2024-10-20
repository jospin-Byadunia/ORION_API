const Service = require("../services/service");

const getAllServices = async (req, res) => {
  try {
    const allServices = await Service.getAllServices();
    res.send({ status: "OK", data: allServices });
  } catch (error) {
    throw error;
  }
};
const createService = async (req, res) => {
  const newService = req.body;
  if (!newService.title || !newService.price || !newService.description) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "One of the following keys is missing or is empty in request body: 'title', 'price','description'",
      },
    });
    return;
  }
  try {
    const createdService = await Service.createService(newService);
    res.send({ status: "OK", data: createdService });
  } catch (error) {
    throw error;
  }
};
const getOneservice = async (req, res) => {
  let { serviceId } = req.params;
  serviceId = serviceId.slice(1);
  if (!serviceId) {
    res.send({
      status: "FAILED",
      data: { error: "Parameter ':serviceId' can not be empty" },
    });
  }
  try {
    const service = await Service.getOneservice(serviceId);
    res.send({ status: "OK", data: service });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
const updateService = async (req, res) => {
  const { body } = req;
  let { serviceId } = req.params;
  serviceId = serviceId.slice(1);
  if (!serviceId) {
    res.send({
      status: "FAILED",
      data: { error: "Parameter ':serviceId' can not be empty" },
    });
  }
  try {
    const updatedService = await Service.updateService(serviceId, body);
    res.send({ status: "OK", data: updatedService });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
const deleteService = async (req, res) => {
  let { serviceId } = req.params;
  serviceId = serviceId.slice(1);
  if (!serviceId) {
    res.send({
      status: "FAILED",
      data: { error: "Parameter ':serviceId' can not be empty" },
    });
  }
  try {
    await Service.deleteService(serviceId);
    res.status(204).send({ status: "OK" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllServices,
  createService,
  getOneservice,
  updateService,
  deleteService,
};
