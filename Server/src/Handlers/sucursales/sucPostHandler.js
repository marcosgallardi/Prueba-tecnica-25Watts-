const sucPostController = require("../../Controllers/sucursales/sucPostController");
const uploadImage = require("../../Helpers/config/cloudinary");
const cleaner = require("../../Helpers/config/cleaner");

const sucPostHandler = async (req, res) => {
  try {
    const { name, ciudad, direccion } = req.body;
    console.log(req.files);
    const result = await uploadImage(req.files.image.tempFilePath);
    const imagen = result.secure_url;
   
    if (req.files) {
      if (imagen) {
        cleaner();
      }
    } else imagen = null;

    const createSucursal = await sucPostController(
      name,
      ciudad,
      direccion,
      imagen
    );
    if (createSucursal) {
      res.status(200).json({ message: "Sucursal creada con exito" });
    } else {
      res.status(400).json({ message: "Error al crear la sucursal" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error del servidor",
    });
    throw error;
  }
};

module.exports = sucPostHandler;
