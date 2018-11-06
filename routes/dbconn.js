const mysql = require('mysql')
const conn = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : '153698ads',
    database    : 'nodetest'
})
conn.connect();

module.exports = conn