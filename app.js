// const express= require('express')
// const app=express()


// app.listen(3000,()=>{
//     console.log("NodeJs project has started hello ritis ")
// }) 

//so same ho mathi ko jastai tara halka aafai try gareko 
// const ritis=require('express')
// const ris=ritis()
// ris.get("/",(req,res)=>{
//     console.log(req)
//     res.send(" Hello world this is ritis this is my first Mern Stack class: ")
// })
// ris.listen(4000,()=>{
//     console.log("so this is done by ritis arey ritish ")
// })


// // using json format 
// const hari=require('express')
// const shyam=hari()
// shyam.get('/' ,(req,res)=>{
//     res.json(" arey dada tapai :")

// })
// shyam.get("/about",(req,res)=>{
//     res.json({
//         message:" this is about page :"
//     })
// })
// shyam.listen(4001,()=>{
//     console.log(" harey ram harey shyam ")
// })






// // day 6 ko code ;
// const express=require('express')
// const app=express()

// app.get('/',(req,res)=>{
//     res.status(200).json({
//         Hello:"this is the status code"
//     })
// })
// app.listen(4999,()=>{
//     console.log("for the status code")
// })


// // day 6 ko code ;
// const expres=require('express')
// const appl=expres()

// appl.get('/',(req,res)=>{
//     res.status(200).json({
//         Hello:"this is the status code"
//     })
// })
// appl.listen(4909,()=>{
//     console.log("for the status code")
// })



// //day 6
// const expre=require('express')
// const appp=expre()

// appp.get('/',(req,res)=>{
//     res.status(200).json({
//         Hello:"this is the status code"
//     })
// })
// appp.listen(4909,()=>{
//     console.log("for the status code")
// })




// Day 7 where we connect data base 
// yo tala ko code ma connect gareko xa RAMRO sanga heara 

// mongodb+srv://ritishsinkemana7_db_user:<db_password>@cluster0.z0vo1q6.mongodb.net/?appName=Cluster0


require('dotenv').config()

const siri=require('express')
const so=siri()

const connectToDatabase= require('./database')
connectToDatabase()


so.get('/',(req,res)=>{
    res.status(200).json({
        Hello:"this is the status code"
    })
})
so.listen(process.env.port,()=>{
    console.log("for the status ritis")
})


// test 1;
