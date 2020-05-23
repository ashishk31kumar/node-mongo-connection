const express = require('express')
const router = express.Router()
const User = require("../models/User");

var userDetail={
    "email":"ashish@gmail.com",
    "name":"ashish"
}

router.get('/', (req, res, next) => {
    console.log("user hit>>>")
    User.create({"email":userDetail.email,"name":userDetail.name},function(err,result){
        if(err){
            console.log("error in inserting in db",err)
        }else{
            console.log("insert in db",result)
            res.send(result)
        }
    })
   
    
});
module.exports = router;