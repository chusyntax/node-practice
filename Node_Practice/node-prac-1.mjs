function findMeaning(){
    return 42;
}

console.log(findMeaning())

/*Node is a runtime not programming language*/
/*Node is way of running JavaScript instructions on your computer outside the browser*/
/* Common globals noe provides ~global,process,module __Filename, require() */
// client = frontend, backend=server 
//HTTP- Hyper text Transfer Protocol ~ Used for servers to communicate with client
//JavaScript code executed in V8 will make use of built in Node.js APIs. When you call one of them,
//They go through Node.js bindings, and get handled by libuv bindings

/*Asynchronous~Not running line by line - Do multiple tasks at the same time */
/*Synchronous~Runs line by line*/

// Node is an asynchronous event-driven JavaScript runtime. 
//Functioin that will be run after a certain time is called a callback funtion
//Callbacks run after a certain event occurs

/*JavaScript is a synchronous language~ But can be wriiten  with asynchronous functions and behave in an asynchronous way*/
//Node runs JavaScript code asynchronously

//Libuv~ Handles the Asynchronous I/O operations, more specifically the File System and Network operations for Node
//We're able to execute all these functions asynchronously thanks to the Event Loop in libuv
//All JS code is running on the main thread and any async functions are put on the Event Loop

//Tasks that involve network are done in your operating system
//Tasks the invole the file system are executed bt thread pools

//Node has main thread~Execute V8 and event loop, and 4 other threads ~ Each can handle one thread at a time
//If we run out od threads in the thread pool, we need to wait for a task to complete before a thread can be used again
//Only some operations use the thread pool
//Node tries to avoid using thread pools as they are more complex and async tasks use up the limited resources of the thread pool
//Where possible, LIbuv uses the operating system kernel directly which has multiple threads of its own ~ Like talking to other computers over the network


/*The Event Loop*/

//Responsible for handling callback funtions
//Allows Node to do multiple things at once
//When you start writing code using the Node runtime, a piece of code starts running ~It is called the Event Loop 
//It processes all the event happening in your Node programs
//Processes all async callbacks until Node is ready to exit
//Exits when there are no more functions to preform
//The loop lives in libuv writtn in the C language

//When node recieves an async function, it is sent off to be executed in the background ~ Executed in operarting system or thread pool
//Callbacks are added to a queue to be executed as soon as possible
//Callback queue (message queue, event queue) keeps track of which CB is ready to be executed
//The CB queue is a FIFO queue ~ Oldest function is processsed first
//Used so that all CB is executed in a reasonable amount of time without interupting each other

//Four phases of the event loop
//Timers (setTimeout, setInterval~Sets a function to be executed many times repeatedly,setImmediate(Csallback executed as soon as possible on the event loop))
//I/O Callbacks
//setImmediate
//Close callbacks

//Each has a queue of callbacks executed during that phase


//Event loop flowing through different phases
//On first iteration(tick) of event loop, first phase starts getting processed - Begins going through all timer callbacks-setTImeout and setInterval
//Still in first tick, it starts to deal with I/O Callbacks ~ Majority of callback functions(Also anything that cant go into the other phases)
//Then setImmediate ~ Runs right after all I/O callbacks are executed ~ Functions here run after those passed in timers
//Close callbacks - executes when network connection or file is closed and you have a callback when it is closed ~ WHen all clsoed callbacks is done
//Event loop makes sure all asynchronous functions eventually execute
//When all is done, the event loop starts again

//Idle and repair phase - used internally by Node


//Node code send work to operating system with libuv which which then communicates at the lowest level to the CPU
//CPU delegates tasks to different devices though communication channel called a Bus

//node is good at servers whith tallking to other databases
//Node is good at serving data for I/O heavy applications


//Design pattern ~ Proven approaches tho solving problems that appear again and again in different programs or apps
