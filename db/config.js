// db/config.js
const mysql2 = require("mysql2");
require("dotenv").config(); // Load environment variables from .env file

const dbConnection = mysql2.createPool({
	host: "sql12.freesqldatabase.com",
	user: "sql12726638",
	password: "lTuNLUFPVr",
	database: "sql12726638",
	port: 3306 || 3306, // Default to 3306 if not specified
	connectionLimit: 10,
});

module.exports = dbConnection.promise();
