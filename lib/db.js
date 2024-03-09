require('dotenv').config();
const {Pool} = require('pg');

module.exports = new Pool({
    max: 10, 
    user: process.env.USER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT
});