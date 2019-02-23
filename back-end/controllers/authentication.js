const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config/config');

const tokenForUser = (user) => {
    const timestamp = Date.now();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secretString);
};

exports.signup = (req,res,next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email}, (err, existingUser) => {

        if(err) return next(err);

        if(existingUser){
            return res.status(422).send({ error: 'Email is in use.'});
        }

        const user = new User({
            email,
            password
        });

        user.save((err) => {
            if(err) return next(err);

            res.json({ token: tokenForUser(user)});
        });

    });
};

exports.signin = (req,res,next) => {
    res.send({token: tokenForUser(req.user)});
};


