const { User } = require("../../db");

const userGetController = async (email, password) => {
  if (!email || !password) return "faltan datos";
  try {

    const user = await User.findOne({ where:{
      email: email, password: password
    }});
    if (user) {
      return "entrar";
    } else {
      return "denegado";
    }
  } catch (error) {
    throw error;
  }
};

module.exports = userGetController;
