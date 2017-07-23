var express = require('express');
var router = express.Router();
var app = express();
var mongoose= require('mongoose');
var Users = require('../models/Users.js');

//register
router.post('/register', function(req, res){
   var username1 = req.body.username;
   var passWord1 = req.body.passWord;
   
   Users.find({username: username1, passWord: passWord1},function(err, register)
{   /*if(err) {
        console.log("Error has occured", err);
    }*/
    if(!register)
        {
            var newUser = new Users({
                username: username1,
                passWord: passWord1
            })
            Users.create(newUser, function(err,result){
                if(err){
                    console.log("Something went wrong with creating the user");
                    return;
                }
               
            });
            console.log("New User with username " + username1 + ", password: " + passWord1 +" added");
        }
        res.json.post(result);
})

});

//delete user

router.post('/UserDel', function(req, res){

   var username1 = req.body.username;
   var passWord1 = req.body.passWord;

   Users.find({username: username1, passWord: passWord1},function(err,result){

    if(err){
        console.log("There was an error");
        return;
    }
    if(!result)
    {
         console.log("No such user with that information was found");
            return;
    }
    Users.remove({username: username1, passWord: passWord1}, function(err, result)
    {
        if(err)
            {
                console.log("error with deleting the user");
            }
        else
            {
                console.log("user sucessfully deleted");
            }
    });

   });
   res.json.post(result);
})

//login

module.exports = router;