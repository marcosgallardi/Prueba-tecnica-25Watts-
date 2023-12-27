const sucDelController = require("../../Controllers/sucursales/sucDelController")

const sucDelHandler = async (req, res) => {
  try {
    const { id } = req.query;
    if(id){
        const deleted = await sucDelController(id)
    }
  } catch (error) {}
};

module.exports = sucDelHandler;
