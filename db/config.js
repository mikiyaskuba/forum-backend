// db/config.js
const mysql2 = require("mysql2");
require("dotenv").config(); // Load environment variables from .env file

const dbConnection = mysql2.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	port: process.env.DB_PORT || 3306, // Default to 3306 if not specified
	connectionLimit: 10,
});

module.exports = dbConnection.promise();
