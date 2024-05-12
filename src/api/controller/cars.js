const { trusted } = require("mongoose")
const { setError } = require("../../config/error")
const Car = require("../model/cars")

const getAllCars=async(req,res,next)=>{
    try{ const allCars= await Car.find()
    return res.status(200).json(allCars)}
    catch(error){return next(setError(400, "can't find a car"))

    }
}


const getCarById=async(req,res,next)=>{
    try{ const {id}=req.params
    const car= await Car.findById(id)
    return res.status(200).json(car)

    }
    catch (error){
        return next(setError(400,"can`t find car"))
    }

}

const createCar=async(req,res,next)=>{
    try{
        const newCar= new Car(req.body)
        const carBBDD= await newCar.save()
        return res.status(201).json(carBBDD)

    }
    catch(error){return next (setError(400,"can't create car"))}
}
const deleteCar=async(req,res,next)=>{
    try{
        const {id}=req.params
        const car= await Car.findByIdAndDelete(id)
        return res.status(200).json(car)

    }
    catch(error){return next(setError(400, "can't delete car"))}

}
const upDateCar=async(req,res,netx)=>{
    try{
        const{id}=req.params
        const oldCar=await Car.findById(id)
        const newCar= new Car (req.body)
        newCar._id=id
        const  carUpdated= await Car.findByIdAndUpdate(id,newCar,{new:trusted})
        return res.status(200).json(carUpdated)


    }
    catch(error){
        return next(setError(400,"can't upDate car"))
    }
}



module.exports={getAllCars,getCarById,createCar,upDateCar,deleteCar}