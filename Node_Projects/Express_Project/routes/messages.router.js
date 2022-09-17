const express = require('express')

const messagesController  = require('../controllers/messages.controller')

const messagesRouter = express.Router();

messagesController.get('/messages', messagesController.getMessages)
messagesController.post('/messages', messagesController.postMessage)

module.exports = messagesRouter