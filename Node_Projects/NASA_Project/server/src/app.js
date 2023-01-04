const path = require('path')

const express = require('express');

const cors = require('cors');

const morgan = require('morgan')

const app = express();

const launchesRouter = require('./routes/launches/launches.router');

const planetsRouter = require('./routes/planets/planets.router');


app.use(cors({
    origin: 'http://localhost:3000'
}))

//This type of Middlewear (Morgan) should go somewhere highup and right after any security related middlewear
//It is used in the server files
app.use(morgan('combined'))
//Morgan is used for logging requests (in terminal). This gives us details about requests which we can use for debugging
//This gives us a clearer picture as to what our users are going while accessing our application

app.use(express.json())
app.use(express.static(path.join(__dirname,'..','public')))

app.use(planetsRouter)
app.use(launchesRouter)
//Previous two lines HAVE TO be above the get call

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,"..","public","index.html"))
})




module.exports = app