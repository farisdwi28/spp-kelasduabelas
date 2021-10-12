require('dotenv').config()

console.log(process.env.MYSQL_USERNAME)

const connection = require('./connection')

async function main(){
  console.log(await connection)
}

main()