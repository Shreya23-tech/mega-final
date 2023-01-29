const mysql = require('mysql2/promise');
const { host, user, password, database } = require('./constants');

const dbConnection = async () => {
    const connection = await mysql.createConnection({
        host     : "localhost",
        user     : "root",
        password : "Shreya@2001",
        database : "user"
    });

    return connection;
}

module.exports = { dbConnection };