const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'motos_labs',
    password: ''
});

module.exports = pool.promise();