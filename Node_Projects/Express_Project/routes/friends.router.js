const express = require('express')

const friendsController  = require('../controllers/friends.controller')

const friendsRouter = express.Router();

friendsRouter.post('/', friendsController.postFriend); //We can just use / because the route is now relative (Due to line 22)
friendsRouter.get('/', friendsController.getFriends)
friendsRouter.get('/:friendId', friendsController.getFriend)

module.exports = friendsRouter