const user = require('../models').user;
module.exports = {
  deleteUser (req, res) {
    return user
    .destroy({
      where: {
        id: req.session.passport.user,
        }
      })
    .then(() => res.redirect("/session/new"))
    .catch((error) => res.status(400).send(error));
  }
};