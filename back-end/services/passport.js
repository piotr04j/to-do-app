const passport = require('passport');
const User = require('../models/user');
const config = require('../config/config');
const {Strategy, ExtractJwt} = require('passport-jwt');
const LocalStrategy = require('passport-local');

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secretString
};

const jwtLogin = new Strategy(jwtOptions, (payload,done) =>{

    User.findById(payload.sub, (err, user) =>{
        if(err) return done(err,false); // db problem

        if(user){
            done(null,user); // user found
        } else {
            done(null, false); //user not found
        }
    });

});

const localOptions = {
    usernameField: 'email'
}

const localLogin =  new LocalStrategy(localOptions, (email,password ,done) =>{

    User.findOne({email}, (err, user) =>{
        if(err) return done(err);

        if(user){

        } else {
            done(null, false); //user not found
        }

        user.comaparePassword(password, (err, isMatch) => {
            if(err) return done(err);
            if(!isMatch) return done(null, false);

            done(null, user);
        })
    });

});

passport.use(jwtLogin);
passport.use(localLogin);

