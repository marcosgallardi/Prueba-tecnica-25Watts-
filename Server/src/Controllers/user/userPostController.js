const { User } = require("../../db");

const userPostController = async (
  name,
  lastName,
  email,
  password,
  birthDate,
  phoneNumber
) => {
  if (!name || !lastName || !email || !password || !birthDate || !phoneNumber)
    return "faltan datos";
  const user = await User.findOne({
    where: {
      email: email,
    },
  });

  if (user) return "usuario ya existe";
  try {
    const newUser = await User.create({
      name,
      lastName,
      email,
      password,
      birthDate,
      phoneNumber,
    });

    return newUser;
  } catch (error) {
    throw error.message;
  }
};

module.exports = userPostController;
