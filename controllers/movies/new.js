const movie = require('../../models').movie;
module.exports = { 
  add_movie (req, res, next) {
    res.render('movies/index', { 
      title: 'Add Movie',
      user_id: req.session.passport.user
  })
  },

  addMovie (req, res) {
  console.log(req.body)
  return movie
    .create({
      movie_title: req.body.title,
      movie_director: req.body.director,
      cover_art: req.body.image,
      release_date: req.body.releaseDate,
      status: 'Unwatched.'
    })
    .then((movie) => res.redirect(`/usersMovies/${movie.id}`))
    .catch((error) => res.status(400).send(error));
  },
};
