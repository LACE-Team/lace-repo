const passport = require('passport');

// PASSPORT STUFF
// this router handler will try to auth the user using passport and passing the passport strategy (defined above as googleStrategy} - CA notes
// code internal to googel oauth20 has some logic that thats authentics with a string of google will use this GoogleStrategy. -CA notes
// the scope is asking google to give access to the user profile and email. this is defined types, see docs for more -CA notes

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));
};

// END OF PASSPORT STUFF
