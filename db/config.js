const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
	host: "sql5.freesqldatabase.com",
	user: "sql5724579",
	password: "1jbuQBSPUb",
	database: "sql5724579",
	connectionLimit: 10,
});
// dbConnection.execute("select 'test' ", (err, result) => {
// 	if (err) throw err.message;
// 	console.log(result);
// });

module.exports = dbConnection.promise();
