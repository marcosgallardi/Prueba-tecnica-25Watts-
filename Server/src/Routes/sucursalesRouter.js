const { Router } = require("express");
const sucPostHandler = require("../handlers/sucursales/sucPostHandler");


const sucursalesRouter = Router();


sucursalesRouter.post("/create", sucPostHandler)

sucursalesRouter.get("/", )

sucursalesRouter.put("/update", )

sucursalesRouter.delete("/delete", )




module.exports = sucursalesRouter;