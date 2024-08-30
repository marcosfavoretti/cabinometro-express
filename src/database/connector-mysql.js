const mysql = require('mysql2/promise.js')

let connection;
/**
 * 
 * @returns {import("mysql2").Connection}
 */
async function connectToDatabaseMysql() {
    if (!connection) {
        try {
            connection = await mysql.createConnection({
                host: process.env.MYSQLHOST,
                user: process.env.MYSQLUSER,
                password: process.env.MYSQLPASSWORD,
                database: process.env.MYSQLDATABASE
            });
        } catch (err) {
            throw err;
        }
    }
    return connection;
}

module.exports =  connectToDatabaseMysql;
