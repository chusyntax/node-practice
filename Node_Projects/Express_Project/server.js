

const express = require('express')

const app = express() //This function is exported from express

const PORT = 3000;

friends = [
    {
        id:0,
        name: 'Nikola Tesla'
    },
    {
        id:0,
        name: 'Bill Gates'
    },
    {
        id:0,
        name: 'Van Chu'
    }
]

app.get('/friends', (req,res)=>{
    res.json(friends) // You can use .json to be more specific
})

app.get('/friends/:friendId', (req,res)=>{ //You need to use the colon
    const friendId = Number(req.params.friendId)//This is user input. We convert it to a number as that is how it will be in the url

    //This is for validation. Validation is used for values which we dont have full control of and to avoid unexpected bugs
    const friend = friends[friendId]
    if(friend){
        res.status(200).json(friend)
    } else{
        res.status(404).json({
            error: "This friend does not exist"
        });

    }
})

app.get('/messages', (req,res)=>{
    res.send('<ul><li>Hey Einstein</li></ul>')
})

app.post('/messages', (req,res)=>{
   console.log("Updating messages")
})

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
