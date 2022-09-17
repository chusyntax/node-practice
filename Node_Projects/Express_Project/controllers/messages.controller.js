function getMessages (req , res ) { //Better to name functions as this way when debugging, the functions name will show
    res.send ('<ul><li>Hello Albert!</li></ul>') 
    }
 
function postMessage ( req , res ) {
    console.log('Updating messages...') 
    }

module.exports = {
    getMessages,
    postMessage
}    