const userGetController = require("../../Controllers/user/userGetController");

const userGetHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    const loginUser = await userGetController(email, password);
    
    if (loginUser === "entrar") {
      res.status(200).json({ login: true });
    }else if(loginUser === "faltan datos"){
      res.status(400).json({message: "faltan datos", login: false });
    }else {
      res.status(400).json({ message: "Email o contraseña incorrectos",login: false });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });

    throw new Error(error.message);
  }
};

module.exports = userGetHandler;
