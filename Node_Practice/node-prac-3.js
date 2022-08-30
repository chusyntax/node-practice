//Node Package Manager

//Makes collaberation easier
//Node has a big library of packages
//Found on npmjs.com

//Module vs Package
//Module ~ A file that contains some code which may be exported from that file
//Package ~ A collection of modules that have been packaged together

//In order to install packages, we first need to initialise our program with the npm tool
//Type in npm init in our terminal
// npm init -y would have sai yes to all the questions asked and given us all the defaults
// nom run start ~ That will run our start script

const axios = require('axios')

axios.get('https://www.google.com')
.then((response)=>{
    console.log(response)
})
.catch((err)=>{
    console.log(err)
})
.then(()=>{ //This function executes when above handling is complete
    console.log("All done")
})

//Nodemon executes code automatically
// To run nodemon, add script to package.json
//Adding "dev": "nodemon (filename).js"
//Or you can use the filepath method
// ./node_modules./bin/nodemon (filename).js~ Run this in the terminal
// To install nodemon globally (All over the computer and never need to install it again) use command
//npm install -g nodemon
//This has the disadvantage of making the package.json less representative of what I need fro the program to work
//Now there are some external dependancies that need to be installed first
   