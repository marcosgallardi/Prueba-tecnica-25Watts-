const userTarjetasPutCtrl = require("../../Controllers/user/userTarjetasPutCtrl");

const userTarjetaPutHandler = async (req, res) => {
  try {
    const { saldoACargar, idTarjeta, idUsuario } = req.body;

    const data = await userTarjetasPutCtrl(saldoACargar, idTarjeta, idUsuario);

    if (data) {
      res.status(200).json(data);
    } else {
      res.status(400).json({ message: "Error al cargar saldo" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    throw error.message;
  }
};

module.exports = userTarjetaPutHandler;
