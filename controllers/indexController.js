const db = require('../db/queries')
exports.loadMessages =  async(req, res) => {
    const messages = await db.getAllMessages()
    res.render('index', { title: 'Mini Message Board', messages: messages})
}