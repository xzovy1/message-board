const { Router } = require('express');

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date(),
      ip: '127.0.0.1'
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date(),
      ip: '127.0.0.1'
    }
  ];

const indexRouter = Router();
indexRouter.get('/', (req, res) => {
    res.render('index', { title: 'Mini Message Board', messages: messages})
})


module.exports = {indexRouter, messages};