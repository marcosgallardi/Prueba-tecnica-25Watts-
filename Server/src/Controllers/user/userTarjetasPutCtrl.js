const { Tarjetas } = require("../../db");
const userTarjetasPutCtrl = async (saldoACargar, idTarjeta, idUsuario) => {
  try {
    const data = await Tarjetas.findOne({
      where: {
        UserIdUsuario: idUsuario,
        id_tarjeta: idTarjeta,
      },
    });

    data.saldo = Number(data.saldo) + Number(saldoACargar);

    await data.save();

    return data;
  } catch (error) {
    throw error.message;
  }
};

module.exports = userTarjetasPutCtrl;
