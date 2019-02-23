const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


const listSchema = new Schema({
    toDo: {
        type: [String]
    },
    inProgress: {
        type: [String]
    },
    done: {
        type: [String]
    },
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const modelList = mongoose.model('list', listSchema);


module.exports = modelList;