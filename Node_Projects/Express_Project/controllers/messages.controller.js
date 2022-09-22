const path = require('path') //Makes it able for other operating systems to use path

function getMessages (req , res ) { //Better to name functions as this way when debugging, the functions name will show

    res.sendFile(path.join(__dirname,'..', 'public', 'images', 'tt.jpg'))//Takes path of file you want to send. dirname is built into Node and helps get an absolute path
    
    //res.send ('<ul><li>Hello Albert!</li></ul>') 
    }
 
function postMessage ( req , res ) {
    console.log('Updating messages...') 
    }

module.exports = {
    getMessages,
    postMessage
}    