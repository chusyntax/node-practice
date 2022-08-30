const {parse} = require('csv-parse')

const fs = require('fs')
const results = []


fs.createReadStream('kepler_data.csv')

.pipe(parse({ // Pipe function is meant to connect readable stream source to writtable stream destination
             //Kepler file is source and parse function is the destination

    comment: '#',
    columns: true //Returns each row in CSV file as a JavaScript object with key value pairs

})) 

.on('data', (data) =>{
    results.push(data)
})
.on('error', (err)=>{
    console.log(err)
})
.on('end', () =>{
    console.log(results)
    console.log("Done")
})