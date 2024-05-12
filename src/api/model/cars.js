const mongoose=require("mongoose")
const carSchema=new mongoose.Schema({
    name:{type:String, require:true,trim:true},
    img:{type:String,require:true,trim:true},
    fuel:{type:String,require:false,trim:true } ,
    price:{type:Number,require:true},
    stock:{type:Boolean,require:true,default:true}


},{timestamps:true,collection:"cars"})


const Car=mongoose.model("car",carSchema)
module.exports=Car