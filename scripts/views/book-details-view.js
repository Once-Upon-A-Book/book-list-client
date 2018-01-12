var app = app || {};

(module => {

  const bookDetailsPage = {};

  booksDetailPage.init = (book) => {
    $('#book-title').text(book.title);
    $('#book-author').text(book.author);

    //$('book-detail-page').show()
  };

  module.bookDetailsPage = bookDetailsPage
})(app)