const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/users')
let secretKey = process.env.rahasia

module.exports = {
    signup: function(req, res){
        let email = req.body.email;
        let password = req.body.password;
        let confirm_password = req.body.confirm_password
        if(password == confirm_password){
            let newData = {
                email,
                password
            }
            bcrypt.hash(password, 10, function(err, hash){
                if(err){
                    res.status(400).json({
                        err
                    })
                }else{

                    newData.password = hash
                    let user = new User(newData)
                    user.save()
                        .then(result=>{
                            
                            res.status(200).json({
                                result
                            })
                        })
                        .catch(err=>{
                            console.log('errro')
                            res.status(400).json({
                                err
                        })
                    })
                        
                }
            })
        }else{
            res.status(400).json({
                message: 'passsword not match'
            })
        }
        
        
    },
    signin: function(req,res){
        let email = req.body.email;
        let password = req.body.password;
        User.findOne({email:email})
            .exec()
            .then(user=>{

                bcrypt.compare(password, user.password, function(err, result){
                    if(err){
                        res.status(400).json({
                            err
                        })
                    }else{
                        let token = json.signin({email: user.email, id: user._id}, secretKey)
                        res.status(200).json({
                            result
                        })
                    }
                })
            })
            .catch(err=>{

            })
    }
}