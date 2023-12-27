const { Sucursal } = require("../../db");

const sucUpdController = async (id, name, ciudad, direccion, imagen) => {

  const sucursal = await Sucursal.findById(id);

  if (!sucursal) return "Sucursal no encontrada";
  
  sucursal.name = name;
  sucursal.ciudad = ciudad;
  sucursal.direccion = direccion;
  sucursal.imagen = imagen;
  
  await sucursal.save();

  return sucursal;
};
module.exports = sucUpdController;
