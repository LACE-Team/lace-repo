const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.get('/MPP/:name', requireLogin, (req, res) => {
    const { name } = req.params;
    console.log(name);
  });
};
