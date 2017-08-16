const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

// In order to support login sessions, Passport will serialize and deserialize user instances 
// to and from the session.
// request->extract cookie-> passport pull user id out of cookie data -> deserialize user
//    -> set req.user
passport.serializeUser((user, done) => {
  // only the user ID is serialized to the session
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // find the user, which will be restored to req.user.
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true    // for heroku deploy
    },
    (accessToken, refreshToken, profile, done) => {
      //google oauth api callback
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // error, user
          done(null, existingUser);
        } else {
          new User({ googleId: profile.id }).save().then(user => {
            done(null, user);
          });
        }
      });
    }
  )
);
