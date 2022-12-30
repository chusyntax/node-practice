const http = require('http');

const app = require('./app');

const PORT  = process.env.PORT || 8000 ; //Sets port to environmental variable (if available)

const {loadPlanetsData} = require('./models/planets.model')
//We want to wait for the function to complete before listening for and responding to requests

const server = http.createServer(app) ; 

async function startServer(){ //Await needs to be used in an async function because of the different common.js and ECMAScript syntax

    await loadPlanetsData()
    server.listen ( PORT , () => {
    console.log( `Listening on port ${ PORT }...`);
})

}

startServer()

