const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');


const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', function(next) {

    bcrypt.genSalt(10, (err, salt) =>{
        if(err) return next(err);

        bcrypt.hash(this.password, salt, null, (err, hash) =>{
            if(err) return next(err);

            this.password = hash;
            next();
        });
    });
});

const modelUsers = mongoose.model('user', userSchema);


module.exports = modelUsers;