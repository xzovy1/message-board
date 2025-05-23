const db = require('../db/queries')

exports.formGet = (req, res) => {
    res.render('form');
}

exports.addMessagePost = async(req, res) => {
    let {message, user} = req.body;
    let ip = req.ip
    let messages = await db.getAllMessages();
    // let ip = req.socket.remoteAddress;
    // messages.unshift({text: message, user: user, added: new Date()})
    res.redirect('/')
}