const sql = require ("mysql");

const db = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "customers_database"
})
db.connect();
module.exports = db;