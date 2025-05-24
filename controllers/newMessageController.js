const db = require('../db/queries')

exports.formGet = (req, res) => {
    res.render('form');
}

exports.addMessagePost = async(req, res) => {
    let {message, user} = req.body;
    const now = new Date();
    const data = {message: message, user: user, date_time: now};
    await db.addMessage(data)
    
    // let ip = req.socket.remoteAddress;
    // messages.unshift({text: message, user: user, added: new Date()})
    res.redirect('/')
}