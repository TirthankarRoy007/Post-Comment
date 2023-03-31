const express = require("express")
const mongoose = require("mongoose")
const route = require("./route/route")
const app = express()

app.use(express.json())
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://Tirtha008:mlpnk3AhOzHztAdO@tirthacluster.psqixlb.mongodb.net/PostComment",{useNewUrlParser: true})
.then(()=>console.log("MongoDB is Connected"))
.catch((error)=>console.log(error))

app.use("/",route)

app.use((req,res)=>{
    res.status(404).send({status:false,message:"URL not found"})
})

app.listen(3000 , ()=>{console.log("Express App is running on PORT "+ 3000 )})