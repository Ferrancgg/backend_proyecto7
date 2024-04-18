const mongoose=require("mongoose")
const carSchema=new mongoose.Schema({
    tittle:{type:String, require:true,trim:true},
    cover:{type:String,require:true,trim:true},
    fuel:[{type:String,require:false, enum:["diesel","gasolina","electrico", "hibrido"]} ],
    price:{type:Number,require:true},
    stock:{type:Boolean,require:true,default:true}


},{timestamps:true,collection:"cars"})


const Car=mongoose.model("car",carSchema)
module.exports=Car