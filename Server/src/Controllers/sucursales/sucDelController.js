const { Sucursal } = require("../../db");

const sucDelController = async (id) => {
  try {
    const deleted = await Sucursal.destroy({
      where: {
        id: id,
      },
      // force: true
    });
    return deleted;
  } catch (error) {
    throw error.message;
  }
};

module.exports = sucDelController;
