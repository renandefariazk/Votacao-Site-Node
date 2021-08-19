require('dotenv').config();

module.exports = {
    dialect:"mysql",
    host:process.env.DB_HOST,
    database:process.env.DB_NAME,
    username:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    timezone:'-03:00',
    port:3306
};