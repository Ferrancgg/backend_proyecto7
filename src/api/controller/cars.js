const { setError } = require("../../config/error")
const Car = require("../model/cars")

const getAllCars=asyn(req,res,next)=>{
    try{ const allGames= await Car.find()}
    catch(error){return next(setError(400, "can't find a car"))

    }
}

module.exports={getAllCars}