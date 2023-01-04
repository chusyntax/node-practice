const {getAllLaunches}= require('../../models/launches.model')

function httpGetAllLaunches(req,res){
    //Controller manipulates imported data into a format that works for our API ~ This was correct with the previous line
    //return res.status(200).json(Array.from(launches.values()))

    return res.status(200).json(getAllLaunches())

}

module.exports={
    httpGetAllLaunches,
}