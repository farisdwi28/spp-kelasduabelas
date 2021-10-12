//required for universal crud system

var mysql = require('mysql2');


const main = async () => {
	
	const con = mysql.createConnection({
		host: process.env.MYSQL_HOST,
		user: process.env.MYSQL_USERNAME,
		password: process.env.MYSQL_PASSWORD,
		database: process.env.MYSQL_DATABASE
	})
	
	await con.connect( (err) => {
		if(err) throw err;
		con.query("SHOW TABLES", (err, result, fields) => {
			return result;
		})
	})

}

console.log(main())