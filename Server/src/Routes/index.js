const { Router } = require("express");
const userRouter = require('./userRouter');
const sucursalesRouter = require('./sucursalesRouter');

const router = Router();

router.use('/users',userRouter)
router.use('/sucursales',sucursalesRouter)

module.exports = router;
