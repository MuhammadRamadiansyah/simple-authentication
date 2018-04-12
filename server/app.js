const express  = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const users = require('./routes/users')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/simpleauth')


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', users)


app.listen(3000, ()=> console.log('listen on port 3000'))