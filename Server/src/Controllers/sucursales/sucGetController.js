const { Sucursales } = require("../../db");

const sucGetController = async () => {
  try {
    return await Sucursales.findAll();
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = sucGetController;
