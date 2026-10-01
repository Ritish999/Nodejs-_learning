// const express= require('express')
// const app=express()


// app.listen(3000,()=>{
//     console.log("NodeJs project has started hello ritis ")
// }) 

//so same ho mathi ko jastai tara halka aafai try gareko 
const ritis=require('express')
const ris=ritis()
ris.get("/",(req,res)=>{
    console.log(req)
    res.send(" Hello world this is ritis this is my first Mern Stack class: ")
})
ris.listen(4000,()=>{
    console.log("so this is done by ritis sinke")
})