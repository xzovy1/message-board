const { Router } = require('express');
const {messages} = require('./indexRouter');

const newMessageRouter = Router();
newMessageRouter.get('/', (req, res) => {
    res.render('form');
})

newMessageRouter.post('/', (req, res) => {
    let {message, user} = req.body
    let ip = req.socket.remoteAddress;
    messages.unshift({text: message, user: user, added: new Date(), ip: ip})
    res.redirect('/')
})

module.exports = newMessageRouter;