const fs = require('fs')
const path = require('path')
//Built ins should be above third party libraries

const {parse} = require('csv-parse')

const habitablePlanets = []

function isHabitablePlanet(planet){
    return planet['koi_disposition'] === "CONFIRMED"
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6
}

function loadPlanetsData(){
return new Promise((resolve,reject)=>{ // Using Promise to know when planets data has been successfully loaded
    fs.createReadStream(path.join(__dirname,'..','..','data','kepler_data.csv'))

    .pipe(parse({ // Pipe function is meant to connect readable stream source to writtable stream destination
                 //Kepler file is source and parse function is the destination

        comment: '#',
        columns: true //Returns each row in CSV file as a JavaScript object with key value pairs

    })) 

    .on('data', (data) =>{
        if(isHabitablePlanet(data))
        habitablePlanets.push(data)
    })
    .on('error', (err)=>{
        console.log(err)
        reject(err)
    })
    .on('end', () =>{
      //  console.log(habitablePlanets.map((planet)=>{ // Map takes a call back that for each item in the array, processses it then returns new value for that item
     //   return planet['kepler_name']    
      //  }))
        console.log(`${habitablePlanets.length} habitable planets found!`)
        resolve()
    })
})
}
function getAllPlanets(){
    return habitablePlanets;
}

module.exports={
    loadPlanetsData,
    getAllPlanets,
}