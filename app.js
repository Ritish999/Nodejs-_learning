require('dotenv').config()

const express = require('express')
const app = express()

const connectToDatabase = require('./database')
const Blog = require('./model/blogModel')

app.use(express.json())

// import gareko kina vane uta bata exort haneko thiyo
const {multer,storage}=require('./middleware/multerConfig')
const upload =multer({storage : storage})// use storage paxadi because multer ko const ma storgae vaneko variable banayeko xa aani sabai tesma store vayeko xa


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

// Starting the server
app.listen(process.env.port, () => {
    console.log("for the status ritis")
})