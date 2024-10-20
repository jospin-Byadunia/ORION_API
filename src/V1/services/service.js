const Service = require("../models/serviceModel");

const getAllServices = async () => {
  try {
    const services = await Service.find({});
    return services;
  } catch (error) {
    throw error;
  }
};
const createService = async (newService) => {
  try {
    await Service.create(newService);
  } catch (error) {
    throw error;
  }
};
const getOneservice = async (serviceId) => {
  try {
    const service = await Service.findById(serviceId);
    return service;
  } catch (error) {
    throw error;
  }
};
const updateService = async (serviceId, body) => {
  try {
    return await Service.findByIdAndUpdate(serviceId, body);
  } catch (error) {
    throw error;
  }
};
const deleteService = async (serviceId) => {
  try {
    await Service.findByIdAndDelete(serviceId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllServices,
  createService,
  getOneservice,
  updateService,
  deleteService,
};
