const express=require("express")
require("dotenv").config()


const { connectDB } = require("./src/config/bd")
const { setError } = require("./src/config/error")
const indexRouter = require("./src/api/routes/indexRouter")

const app=express()
const PORT=4001

connectDB()
app.use(express.json())

app.use("/api/v1",indexRouter)

// app.use("/api/v1", (res,req,next)=>{
//     res.status(200).json({"esto funciona ya"})
// })
// app.use("/api/v1", (req, res) => {
//     res.status(200).json({ message: "¡Petición recibida en /api/v1!" });
// });


app.use("*",(req,res,next)=>{
    return next( setError(404,"not found"))
})
app.use((error,req,res,next)=>{
    return res.status(error.status||500).json(error.message||"internal error")
})

app.listen(PORT, ()=>{console.log( `entry en http://localhost:${PORT}`)})