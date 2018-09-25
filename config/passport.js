var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
passport.serializeUser(function(user, done) {
 done(null, user);
});
passport.deserializeUser(function(user, done) {
 done(null, user);
});
passport.use(
 new GoogleStrategy(
  {
   clientID: '790437326561-hg35k00q863fh87vfilu2f6llto45tah.apps.googleusercontent.com',
   clientSecret: "GOOGLE_CLIENT_SECRET",
   callbackURL: 'VqBST0LDcbDDQxTnAy8HRsSZ'
  },
  function(accessToken, refreshToken, profile, done) {
   var userData = {
    email: profile.emails[0].value,
    name: profile.displayName,
    token: accessToken
   };
   done(null, userData);
  }
 )
);