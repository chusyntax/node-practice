const express = require('express');

const path = require('path');

const friendsRouter = require('./routes/friends.router');

const messagesRouter = require('./routes/messages.router');

const app = express(); //This function is exported from express

app.set('view engine', 'hbs'); //To use view engine we installed

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res)=>{
    res.render('index',{
        title:"cool meme",
        caption:'real cool meme haha',
    })
})

const PORT = 3000;

app.use('/site',express.static(path.join(__dirname,'public')));//parameter is a string containing relatice path of folder we want to make available from the server.Usually with the website 

app.use(express.json())//This function is needed and used to register json parsing middleware

app.use('/friends/',friendsRouter); // Here we are mounting friendsRouter to app object

app.use('/messages', messagesRouter)

app.listen(PORT, ()=>{ //This function runs when the server starts
    console.log(`Listening on Port ${PORT}...`)
})

//Idea of Express was to build something minimal that could be extended with many extra features by using middleware
//Middleware allows you to manipulate requests going in and responses going out to add additional functionality

//Nodemon
//This is used so that whenever we change and save our file, the server restarts automatically
// To install, use npm install nodemon --save-dev (So that it goes straight to development dependencies)
//Then is scripts, add, "watch": "nodemon (name of file).js"

//Dev dependancies are only needed while developing our project


//Middleware
//Special functions that run between the request coming in and response coming out of our API

//Middleware is created like this: app.use(function(req,res,next){})
//Next is a function express gives us to call the next middleware
//It controls the flow of our middleware


//Model-View-Controller (MVC)
//A software design pattern that tells us how to organise various different pieces of code based on what they do


//User interacts with the components by:

//User uses controller (by making requests)
//Controller understands the processes the user requests and manipulates the model accordingly (Adding/removing data from DB)
//When the model is updated by that controller, the views react to those changes and the user sees the updated data, however it is presented by that view

//Summaried:
//User uses controller => Controller manipulates model => Model updates view => View sees User 


//Express Router
//Like a mini application that contains its own set of middleware and routes
//Use it to break down application and make it more modular
//Created using Express.Router();




//REST
//REpresentational State Transfer ~ Standard of how to talk to servers by using HTTP Protocol

//Makes heavy use of existing standards
//End points are collections of data
//Use GET, POST, PUT and DELETE
//Uses client and server architecture
//Requests are stateless and cachable ~ Each request is seperate and not connected to any state on the client thats not included in the request
//Only keeps track of data in the collections
//Requests keep track of state which we can cache, saving the results for future use


//CRUD ~ Create, Read, Update Delete
//These are the 4 basic functions we can preform on our data
