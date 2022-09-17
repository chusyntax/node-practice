const model = require('../model/friends.model')

function postFriend(req,res){

    if (!req.body.name) {
        return res.status(400).json({
          error : ' Missing friend name '
       }); 
    }

    const newFriend = {
        name: req.body.name,
        id: model.length
    };
    model.push(newFriend)

    res.json(newFriend)
}

function getFriends (req,res){
    res.json(model) // You can use .json to be more specific
}

function getFriend (req,res){ //You need to use the colon
    const friendId = Number(req.params.friendId)//This is user input. We convert it to a number as that is how it will be in the url

    //This is for validation. Validation is used for values which we dont have full control of and to avoid unexpected bugs
    const friend = model[friendId]
    if(friend){
        res.status(200).json(friend)
    } else{
        res.status(404).json({
            error: "This friend does not exist"
        });

    }
}

module.exports = {
    postFriend,
    getFriends,
    getFriend
}