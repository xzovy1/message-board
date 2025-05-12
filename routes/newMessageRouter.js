const { Router } = require('express');
// const express = require('express');
const {messages} = require('./indexRouter')

const newMessageRouter = Router();
newMessageRouter.get('/', (req, res) => {
    res.render('form');
})

console.log(messages)
newMessageRouter.post('/', (req, res) => {
    let {message, user} = req.body
    messages.unshift({text: message, user: user, added: new Date()})
    res.redirect('/')
})

module.exports = newMessageRouter;