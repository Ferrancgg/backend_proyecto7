const { getAllCars, getCarById, createCar, upDateCar, deleteCar } = require("../controller/cars")

const carsRoutes=require("express").Router()
carsRoutes.get("/", getAllCars)
carsRoutes.get("/:id",getCarById)
carsRoutes.post("/",createCar)
carsRoutes.put("/:id",upDateCar)

carsRoutes.delete("/:id",deleteCar)
module.exports=carsRoutes

