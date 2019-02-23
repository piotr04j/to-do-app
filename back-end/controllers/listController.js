const List = require('../models/list');
const jwt_decode = require('jwt-decode');


exports.saveList = (req,res,next) => {

    console.log(req.body,'ssss')
    const userId = jwt_decode(req.body.token).sub;
    const done = req.body.done || [];
    const inProgress = req.body.inProgress || [];
    const toDo = req.body.toDo || [];



    List.findOne({_user: userId}, (err, existingList) => {

        if(err) return next(err);

        if(existingList){
            
            List.updateOne({_user: userId}, { $set: {done, inProgress, toDo}}, (err, updatedList) => {

                if(err) return next(err);

                res.send(existingList);

            });

        } else {

            const list = new List({
                toDo: [],
                inProgress: [],
                done: [],
                _user: userId,
            });

            list.save((err) => {
                if(err) return next(err);
                res.json(list);
            });

        }

    });
};