require('dotenv').config()

const express = require('express')
const app = express()

const connectToDatabase = require('./database')
const Blog = require('./model/blogModel')

app.use(express.json())

// import gareko kina vane uta bata exort haneko thiyo
const {multer,storage}=require('./middleware/multerConfig')
const upload =multer({storage : storage})// use storage paxadi because multer ko const ma storgae vaneko variable banayeko xa aani sabai tesma store vayeko xa
const fs=require('fs')//this is for deletetation and to delete from folder 

connectToDatabase()

// GET API
app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hello out there, this is Ritis!"
    })
})

// POST API
app.post('/blog', upload.single('image'),async (req, res) => {

    // Getting data from request body
    const { title, description, subtitle  } = req.body
    const image = req.file

    // today code
    // console.log(req.body)
    console.log(req.file)

    // Checking required data
    if (!title || !subtitle || !description || !image) {
        return res.status(400).json({
            message: "Mampakha sabai data rakh khurka"
        })
    }

    // Printing data in terminal
    console.log(title, description, subtitle )

    // Creating blog in database
    await Blog.create({
        title: title,
        subtitle: subtitle,
        description: description,
        image: image.filename   // so mathi const image  lekheko karan yeta image.file vayeko
    })

    // Sending response
    res.json({
        message: "blog api hit sucessfully"
    })
})

app.get("/blog/:id", async(req, res) => {
    // id ko thau ma j rakhda pani hunca
    // console.log(req.params.id);
    const id=req.params.id
     const blog = await Blog.findById(id)// single data xas vane object ma dinxa

     if(!blog){
        res.status(404).json({
            message:"no data found"
        })
     }
     else{
        res.status(200).json({
            message:"Fetched data",
            data : blog
        })
     }
});


//delete garna ko lagi
app.delete("/blog/:id",async(req,res)=>{
   const del=req.params.id
   const blog= await Blog.findById(del)
   const imageName=blog.image
   
   fs.unlink(`storage/${imageName}`,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file deleted sucessfully")
    }
   })
   await Blog.findByIdAndDelete(del)
   res.status(200).json({
    message:"blog deleted sucessfully"
   })
})

//update
app.patch("/blog/:id",async(req,res)=>{
    const id=req.params.id
    const{title,subtitle,description}=req.body
    await Blog.findByIdAndUpdate(id,{
        title :title,
        subtitle : subtitle,
        description : description
        //left side ko column and right side ko value
    })
    res.status(200).json({
        message : "updated sucessfully"
    })


})


app.get("/blog",async(req,res)=>{
    const differentName =await Blog.find({})
    res.status(200).json({
        message : "blogs fetched sucessfully ",
        data : differentName
    })
})

//folder ko image chrome ma hearne vaye yo rakhbe 
app.use(express.static('./storage'))

// Starting the server
app.listen(process.env.port, () => {
    console.log("for the status ritis")
})


