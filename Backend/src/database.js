const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

connection.connect((err) => {
    if (err) {
        console.log("Database Connection Failed", err);
        return;
    }
    console.log("Successfully Connected to Database");
});

module.exports = connection;