const multer=require('multer')

 const storage=multer.diskStorage({
    destination : function(req,file,cb){//cb=call back
        cb(null,"./storage")// storage vaneko folder ho j rakhda pani hunxa aani tesko folder pani banunu parxa
        // explanation
        //cb(error,sucess)

    },
    filename: function(req,file,cb){
        //cb(null,file.originalname)
        cb(null,"riits"+file.originalname)
    }
})

//export garne aaba
module.exports={
    multer,
    storage
}