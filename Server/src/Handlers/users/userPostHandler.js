const userPostController = require("../../Controllers/user/userPostController");

const userPostHandler = async (req, res) => {
  try {
    const { name, lastName, email, password, birthDate, phoneNumber } =
      req.body;
    const newUser = await userPostController(
      name,
      lastName,
      email,
      password,
      birthDate,
      phoneNumber
    );

    if (newUser === "usuario ya existe") {
      res.status(200).json({
        message: "El usuario ya existe",
      });
      return;
    } else if (newUser) {
      res.status(200).json({
        message: "Usuario creado correctamente",
      });
    } else {
      res.status(400).json({
        message: "Error al crear el usuario",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el usuario",
    });

    throw new Error(error);
  }
};

module.exports = userPostHandler;
