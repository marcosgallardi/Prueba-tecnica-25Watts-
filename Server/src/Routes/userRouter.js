const { Router } = require("express");

const userGetHandler = require("../Handlers/users/userGetHandler");

const userPostHandler = require("../Handlers/users/userPostHandler");
const userTarjetaPutHandler = require("../Handlers/users/userTarjetaPutHandler");

const userRouter = Router();

userRouter.post("/", userGetHandler);
userRouter.post("/create", userPostHandler);
userRouter.put("/saldo", userTarjetaPutHandler);

module.exports = userRouter;
