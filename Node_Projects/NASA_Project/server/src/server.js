const http = require('http');

const app = require('./app');

const PORT  = process.env.PORT || 8000 ; //Sets port to environmental variable (if available)

const server = http.createServer(app) ; 

server.listen ( PORT , () => {
  console.log( `Listening on port ${ PORT }...`);
})