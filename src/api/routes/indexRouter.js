const carsRoutes = require("./cars")
const indexRouter=require("express").Router()
indexRouter.use("/cars",carsRoutes)
module.exports=indexRouter