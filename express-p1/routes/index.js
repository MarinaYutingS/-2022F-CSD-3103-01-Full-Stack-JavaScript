const express = require('express')
const router = express.Router()
const User = require('../models/user')


router.get('/',async(req,res) => {
   
    res.render('index')
})

// export the router
module.exports = router