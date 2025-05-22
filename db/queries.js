//.schema -> id, message, user, date_time
const pool = require('./pool');

async function getAllMessages(){
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}


module.exports = {
    getAllMessages
}