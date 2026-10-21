const mongoose=require('mongoose')

// you can use 2 different styles like by making function and using oop like making class 

async function connectToDatabase(){
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Database connected successfully brutha")
}

//use this cuz we are using CJS (COMMON JAVASCRIPT)
module.exports = connectToDatabase

// ES =Ecscript
// yesma chai import export garne wala 1ho 
