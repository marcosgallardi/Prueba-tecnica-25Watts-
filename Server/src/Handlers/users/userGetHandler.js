const userGetController = require("../../Controllers/user/userGetController");

const userGetHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { entrar, tarjetas } = await userGetController(email, password);

    if (entrar) {
      res.status(200).json({ login: true, tarjetas });
    } else if (!entrar) {
      res.status(400).json({ message: "faltan datos", login: false });
    } else {
      res
        .status(400)
        .json({ message: "Email o contraseña incorrectos", login: false });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });

    throw new Error(error.message);
  }
};

module.exports = userGetHandler;
