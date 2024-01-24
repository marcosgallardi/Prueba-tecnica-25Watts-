const { User } = require("../../db");
const { Tarjetas } = require("../../db");

const userGetController = async (email, password) => {
  if (!email || !password) return "faltan datos";
  try {
    const user = await User.findOne({
      where: {
        email: email,
        password: password,
      },
    });

    const tarjetas = await Tarjetas.findAll({
      where: {
        UserIdUsuario: user.id_usuario,
      },
    });
    if (user) {
      if (tarjetas) {
        return { entrar: true, tarjetas };
      }
      return { entrar: true };
    } else {
      return { entrar: false };
    }
  } catch (error) {
    throw error;
  }
};

module.exports = userGetController;
