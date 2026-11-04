const express=require('express')
const app=express()
require('dotenv').config()

const PORT=process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send("hello piya")
})
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})

// const path=require('path')
const mongoose=require('mongoose')
const PORT=process.env
// app.use(express.static('public'))

let connectDB=async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/myDB")
        console.log("mongodb connect successfully")
    }
    catch(err){
        console.log("connection failed!")
        process.exit(1)
    }
}
connectDB()

let studentSchema=mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    contact:Number
})
mongoose.model("Student",studentSchema)


let result = student.create({
    name:"john",
    age:30,
    email:"john34@gmail.com",
    contact:6285636620
})
let student= mongoose.model("student",studentSchema)
app.use(express.json())
    app.post(/'createStudent', async (req,res)=>{
        await student.create(req.body)
       res.status(201).send("user created successfully")
}
app.get('/getallstudent',async(req,res)=>{
    let data=await student.find()
    res.status(200).send(data)
})
app.get('/getstudent:id',async(req,res)=>{
    let data=await student.findById()
    res.status(200).send(data)
})
app.get('/getstudent:id',async(req,res)=>{
    let data=await student.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).send(data)
})
// let connection=mongoose.connect("mongodb://localhost:27017/myDB")
// console.log(connection)
