const authentication = require('./controllers/authentication');
const list = require('./controllers/listController');
const passportLocal = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {

    app.post('/signin', requireSignin,  authentication.signin);
    app.post('/signup', authentication.signup);

    app.post('/saveList', list.saveList);
}

