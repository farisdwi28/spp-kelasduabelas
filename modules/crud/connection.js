require('dotenv').config()

const mysql = require('mysql2/promise');
const wrapper = require('../helpers/wrapper');
const httpCode = require('../helpers/httpCodes');

const makeConnection = async() => {

	const con = await mysql.createConnection({
		host: process.env.MYSQL_HOST,
		user: process.env.MYSQL_USERNAME,
		password: process.env.MYSQL_PASSWORD,
		database: process.env.MYSQL_DATABASE
	})

	const [result] = await con.execute('select * from spp');
	return result;
}

module.exports = makeConnection();