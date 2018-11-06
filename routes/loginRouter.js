const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const conn = require('./dbconn')


app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

app.post('/login', (req, res) => {
    var username = req.body.username
    var password = req.body.password

    var sql = 'select * from user where username = ?'
    var sqlNode = ''
    sqlNode = username

    conn.query(sql, sqlNode, (err, result) => {
        if (err) {
            console.log(err)
            return
        }

        if (password == result[0].password) {
            res.send('success!')
        } else {
            res.send('error!')
        }
    })
})

module.exports = app;