// // const express= require('express')
// // const app=express()


// // app.listen(3000,()=>{
// //     console.log("NodeJs project has started hello ritis ")
// // }) 

// //so same ho mathi ko jastai tara halka aafai try gareko 
// const ritis=require('express')
// const ris=ritis()
// ris.get("/",(req,res)=>{
//     console.log(req)
//     res.send(" Hello world this is ritis this is my first Mern Stack class: ")
// })
// ris.listen(4000,()=>{
//     console.log("so this is done by ritis arey ritish ")
// })


// using json format 
const hari=require('express')
const shyam=hari()
shyam.get('/' ,(req,res)=>{
    res.json(" arey dada tapai :")

})
shyam.get("/about",(req,res)=>{
    res.json({
        message:" this is about page :"
    })
})
shyam.listen(4000,()=>{
    console.log(" harey ram harey shyam ")
})






// day 6 ko code 
const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.status(200).json({
        Hello:"this is the status code"
    })
})
app.listen(4999,()=>{
    console.log("for the status code")
})