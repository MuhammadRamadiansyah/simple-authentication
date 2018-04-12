const router = require('express').Router()
const {signup} = require('../controllers/controller_user')

router.post('/signup',signup)

module.exports = router