const { Router } = require("express");

const { sucPostHandler, sucGetHandler, sucUpdHandler, sucDelHandler } = require("../handlers/sucursales")


const sucursalesRouter = Router();


sucursalesRouter.post("/create", sucPostHandler)

sucursalesRouter.get("/", sucGetHandler)

sucursalesRouter.put("/update/:id", sucUpdHandler)

sucursalesRouter.delete("/delete/:id", sucDelHandler)




module.exports = sucursalesRouter;