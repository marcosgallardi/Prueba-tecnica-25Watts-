const sucUpdController = require("../../Controllers/sucursales/sucUpdController");

const sucUpdHandler = async (req, res) => {
  try {
    const { id } = req.query;
    const { name, ciudad, direccion } = req.body;
    const result = await uploadImage(req.files.image.tempFilePath);
    const imagen = result.secure_url;

    if (req.files) {
      if (imagen) {
        cleaner();
      }
    } else imagen = null;

    if (id) {
      const update = await sucUpdController(
        id,
        name,
        ciudad,
        direccion,
        imagen
      );
      if (update) {
        res.status(200).json({
          message: "Sucursal actualizada con exito",
        });
      } else {
        res.status(400).json({
          message: "No se pudo actualizar la sucursal",
        });
      }
    } else {
      res.status(400).json({
        message: "No se pudo actualizar la sucursal, faltan datos",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error del servidor",
    });
    throw error.message;
  }
};

module.exports = sucUpdHandler;
