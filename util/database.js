const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: '*hQpgU}f!bY2'
});

module.exports = pool.promise();