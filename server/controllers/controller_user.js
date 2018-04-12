const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    signup: function(req, res){
        let email = req.body.email;
        let passwoord = req.body.password;
        let confirm_password = req.body.confirm_password
        console.log(email)
        res.status(200).json({
            email
        })
    }
}