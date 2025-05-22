const { Pool } = require('pg');

module.exports = new Pool({
    //pool & db info
    host: "localhost", // or wherever the db is hosted
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: 5432 // The default port
})