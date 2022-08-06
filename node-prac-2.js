//The Require Function

//It is not part of vanilla JavaScript
//It takes a JavaScript file, executes it, then returns the code from that file
//Mostly called with constants (const)

const http = require('http') // First arg - String, RequestObject, URL. Second Arg - callback function
//const {request} = require('https') //Can use destrucutring -Helpful in knowning what functionality we are relying on in our module

// Require function set http constant to the set of functions and data returned from the http module
//We need to use the https module with an https URL

const req = http.request('http://www.google.com', (res)=>{ //The response((res) is the result of making the request
res.on('data', (chunk)=>{ //takes name event as string and listener as a calback
      //Event we respond to is called 'data'. Data event has a parameter for a chunk(pice of data)
    console.log(`Data chunk ${chunk}`)

})
res.on('end', ()=>{ //The end event is sent when there is no more data coming in from the request
    console.log('No more data')
}) 
})

 req.end() //Need to call this function so that request is sent

//Module
//Like a box that contains some code which is dedicated to doing something really well
//Combining modules creates more complex structures 
//Modules:
     // Reuse existing code
     //Organise code
     //Expose only what will be used


//Exporting data
//use module keyword- Module is a global built in that contains data  related to current module   
// eg module.exports = {send,request}
//In the module you want to import the function, you can use require('./node-prac-1.js')
//Use destructuring when importing functions or data from modules with {}