require('dotenv').config();

module.exports = {
    dialect:"mysql",
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    name:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
    port:3306
};