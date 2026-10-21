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


// require('dotenv').config()

// const siri=require('express')
// const so=siri()

// // imp code yo tala ko rakhnu parxa
// // app.use(express.json())
// so.use(siri.json())




// const connectToDatabase= require('./database')
// const Blog = require('./model/blogModel')
// connectToDatabase()


// so.get('/',(req,res)=>{
//     res.status(200).json({
//         Hello:"this is the status code"
//     })
// })

// so.post('/blog',async(req,res)=>{
//     //  console.log(req.body) // lock hunca

//     // const title=req.body.title;
//     // const description=req.body.description;
//     // const subtitle=req.body.subtitle;

//     // mathi ko ra yo same ho
//     const {title,description,subtitle}=req.body;

//     // condition for entering all required data
//     if(!title || !subtitle || !description){
//         res.status(490).json({
//             message: "Mampakha sabai data rakh khurka "
//         })
//     }
//     console.log(title,description);

//      await Blog.create({

//         title : title,
//         subtitle: subtitle,
//         description :description
//     })


//     res.json({
//         message:"blog api hit sucessfully"
//     })
// })

// so.listen(process.env.port,()=>{
//     console.log("for the status ritis")
// })



// so mathi ko code nai ho tara some comments hatayeko xa because the code is 
// malka complex to read
















require('dotenv').config() // Loads environment variables from the .env file

const express = require('express') // Imports Express
const app = express() // Creates an Express application

const connectToDatabase = require('./database') // Imports the database connection function
const Blog = require('./model/blogModel') // Imports the Blog model to work with MongoDB

app.use(express.json()) // Allows Express to read JSON data sent in the request body

connectToDatabase() // Connects the application to MongoDB

// GET API: Runs when someone visits the home route (/)
app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hello out there, this is Ritis!"
    }) // Sends a success response with a message
})

// POST API: Runs when someone sends a POST request to /blog
app.post('/blog', async (req, res) => {

    // Extracts title, description, and subtitle from the request body
    const { title, description, subtitle } = req.body

    // Checks whether all required fields have been provided
    if (!title || !subtitle || !description) {
        return res.status(400).json({
            message: "Mampakha sabai data rakh khurka"
        }) // Sends an error response and stops the route
    }

    // Prints the title and description in the terminal
    console.log(title, description)

    // Creates a new blog document and saves it in MongoDB
    await Blog.create({
        title: title,
        subtitle: subtitle,
        description: description
    })

    // Sends a response after the blog has been saved successfully
    res.json({
        message: "blog api hit sucessfully"
    })
})

// Starts the server and listens on the port specified in .env
app.listen(process.env.port, () => {
    console.log("for the status ritis") // Prints a message when the server starts
})