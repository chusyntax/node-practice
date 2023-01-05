const {getAllLaunches,addNewLaunch}= require('../../models/launches.model')

function httpGetAllLaunches(req,res){
    //Controller manipulates imported data into a format that works for our API ~ This was correct with the previous line
    //return res.status(200).json(Array.from(launches.values()))
    return res.status(200).json(getAllLaunches())
}

function httpAddNewLaunch(req,res){

    const launch = req.body;
    if(!launch.mission || !launch.target || !launch.launchDate || !launch.rocket){
        return res.status(400).json(
            {
              error:'Missing required launch property',  
            }
        )
        //400 ~ Bad Request. Error on client side
        //Most validation that is not security related falls under 400
    }

    launch.launchDate = new Date(launch.launchDate)

if(isNaN(launch.launchDate)){
    return res.status(400).json({
        error:"Invalid launch date",
    })
}
    addNewLaunch(launch)
    return res.status(201).json(launch)
}

module.exports={
    httpGetAllLaunches,
    httpAddNewLaunch,
}