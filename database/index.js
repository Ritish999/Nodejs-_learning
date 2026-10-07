const mongoose=require('mongoose')

// you can use 2 different styles like by making function and using oop like making class 

async function connectToDatabase(){
    await mongoose.connect('mongodb+srv://ritishsinkemana7_db_user:ritish12sinke@cluster0.z0vo1q6.mongodb.net/?appName=Cluster0')
    console.log("Database connected successfully brotha")
}

//use this cuz we are using CJS (COMMON JAVASCRIPT)
module.exports = connectToDatabase

// ES =Ecscript
// yesma chai import export garne wala ho 
