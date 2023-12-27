const { Router } = require("express");

const userGetHandler = require("../Handlers/users/userGetHandler");

const userPostHandler = require("../Handlers/users/userPostHandler");

const userRouter = Router();


userRouter.post("/", userGetHandler)
userRouter.post("/create", userPostHandler)



module.exports = userRouter;