const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../../models/userModel');

module.exports = function (passport){
    passport.use(new LocalStrategy({usernameField:'email', passwordField:'pass'},
    async (email, pass, done)=>{
        try{
            const user = await User.getUser(email);
            if (!user){
                return done(null,false);
            }
            const isValidPass = await User.validPassword(email,pass);
            if (!isValidPass){
                return done(null, false);
            }
            return done(null,user);
        } catch (e){
            return done(e);
        }
    }
    ))
    passport.serializeUser(function (user, done) {
        done(null, user.email);
    });

    passport.deserializeUser(async (email, done)=> {
        const user = await User.getUser(email);
        done(null, user);
    });
}