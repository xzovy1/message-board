const { Router } = require('express');
const {messages} = require('./indexRouter');
const messageController = require('../controllers/newMessageController')

const newMessageRouter = Router();

newMessageRouter.get('/', messageController.formGet)

newMessageRouter.post('/', messageController.addMessagePost)

module.exports = newMessageRouter;