const express = require('express')
const router = express.Router()
const User = require("../models/User");

router.get("/:name",( req, res, next) => {
    console.log("user hit>>>",req.params)
    User.create({"name":req.params.name},function(err,result){
        if(err){
            console.log("error in inserting in db",err)
        }else{
            console.log("insert in db",result)
            res.send(result)
        }
    })
   
    
});
module.exports = router;