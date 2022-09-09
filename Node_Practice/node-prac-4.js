//Web Servers

// API - Application Programming Interface

//HTTP Requests -  Things we ask from our server
//All HTTP Requests have four main parts

// 1 ~ Method ~ Defines operation the browser wants to preforn on server (POST)
// 2 ~ Path ~ The resource we are accessing on the backend (/messages)
// 3 ~ Body ~ Contains data we are sending from browser to server (JSON)
// 4 ~ Headers ~ Optional propertie you can specify on request to send additional metadata to server
// Basically data about the data youa are sending (Size of data)
//Every request must have the Jost header ~ Specifies which server your request is being sent to


//HTTP Responses 

// Headers - 
// Body ~ Contains the data youre fetching from the server - In JSON
// Status Code -  Tells us what went wrong or right. Every response falls into one of 5 series groups:
//  100 - 199 ~ Informational responses
//  200 - 299 ~ Succesful responses
//  300 - 399 ~ Redirects
//  400 - 499 ~ Client error responses
//  500 - 599 ~ Server error responses

const http = require("http")

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

const server = http.createServer();

server.on('request',(req,res)=>{
    // req is a readable stream we can listen to for data coming in using .on function
    // res is a writiable stream ~ We can write some headers to the response

    const items = req.url.split('/')// /friends/2 = ['', 'friends', '2']
    if(req.method === "POST" && items[1] === 'friends'){ //For post requests to the server
        req.on('data', (data)=>{
            const friend = data.toString();
            friends.push(JSON.parse(friend));
            reqspipe(res)
        }) //Body would have the data we want to pass to the server in the request which would be in {}

    } 

    else if(req.method === "GET" && items[1] === 'friends'){
    res.writeHead(200, { // Status code does default to 200
        "Content-Type": "application/json",
    });
    if(items.length ===3){
        const friendIndex = Number(items[2]) //Needed to convert string into number
        res.end(JSON.stringify(friends[friendIndex])) //To find friends at a specific item in friends array
    } else{
    res.end(JSON.stringify(friends))
    } //~End function signals response is complete and ready to be sent back //To set data to passback to browser
    } else if (req.method === "GET" && items[1] === 'messages'){
    res.setHeader("Content-Type", 'text/html')
    res.statusCode = 200
    res.write('<html>');
    res.write('<body>');
    res.write('<ul>') ;
    res.write('<h1><li> Hello Sir Isaac!</li></h1>') ;
    res.write('<li>What are your thoughts on astronomy?</li>')
    res.write('</ul>');         
    res.write('</body>');
    res.write ('</html>') ;
    res.end() ;
 } else { // Can be used for 404 pages not found
    res.statusCode = 404;
    res.write('<h1>Wrong Page buddy!</h1>') ;
    res.end()
 }
}) 

server.listen(PORT,()=>{ //Expects a callback ~ Tells server what to do when it gets a request
    //This function is run when the server starts listening
    console.log(`Listening on port ${PORT}`)
}) //Need to pass in port number our server will be listening in on into this function.

//Different URLs are refered to as endpoints
//Endpoints are responsible for a specific piece of functionlity provided by server 
//Paramaterized route ~ Route/endpoint that can change

//Same Origin Policy

//Origin is a combination of the:
// 1 ~ Protocol -  https://
// 2 ~ Host - Tells us which server will be handling our request ~ google.com
// 3 ~ Port ~ 443

//Whenever one of these things changes, we are no longer at the same origin
//We also cannot change the protocol

//SOP ~ Security feature by browser that restricts what browser is allowed to load when browsing



//CORS ~ Cross Origin Resource Sharing
// Way of relaxing same origin policy restrictions
//Makes us make apps that span different domains and origins

//Header: Access Control Allow Origin: * ~ Allows requests from all origins
// Its always safer to stsate the origins that can request
//When it comes to security, its always better to whitelist than to blacklist