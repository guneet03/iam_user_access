// config/db.js
require('dotenv').config();

const mysql = require('mysql2');

//const connection = mysql.createConnection({
  //host: 'localhost',
  //port: 3307,               // Default port for XAMPP MySQL
  //user: 'root',             // Default username in XAMPP
  //password: '',             // XAMPP uses no password by default
  //database: 'iam_user_access' // Make sure this DB exists in phpMyAdmin
//});
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL as ID', connection.threadId);
});

module.exports = connection;

