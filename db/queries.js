//.schema -> id, message, submitted_by, date_time
const pool = require('./pool');

async function getAllMessages(){
    const { rows } = await pool.query("SELECT * FROM messages ORDER BY date_time DESC");
    // console.log({rows})
    return rows;
}

async function addMessage(message) {
    // console.log(message)
    await pool.query("INSERT INTO messages (message, submitted_by, date_time) VALUES ($1, $2, $3)", [message.message, message.user, message.date_time])
}


module.exports = {
    getAllMessages,
    addMessage
}