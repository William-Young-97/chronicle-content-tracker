const usersBook = require('../../models').users_book;

exports.books = function(req, res, next) {
  console.log(process.env.GOOGLE_BOOKS_API    )
  res.render('books/new')
  // return usersBook
  //   .findAll( {
  //     where: { user_id: req.session.passport.user },
  //     include: 'book'
  //    })
  //   .then((userBooks) => {
  //     const userBookArray = [];
  //     userBooks.forEach((userBook) => {
  //       userBookArray.push(userBook.dataValues)
  //     })
  //     return userBookArray
  //   })
  //   .then( (userBookArray) => res.render( "books/index", {userBookList: userBookArray, title: "Book List"}));
};
