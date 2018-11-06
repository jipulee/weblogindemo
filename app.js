
const newApp = require('./routes/loginRouter')
const path = require('path')
const express = require('express')
newApp.use(express.static(path.join(__dirname, 'public')))

newApp.listen(8888, (err) => {
    console.log('SYSTEM RUNNING ON PORT 8888')
})
