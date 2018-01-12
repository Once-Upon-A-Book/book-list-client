'use strict';

var app = app || {};

(module => {
  let bookCreateView = {};

  bookCreateView.init = () => {
    $('#book-new').show();
  };

  $('#add-book').on('submit', function(e) {
    e.preventDefault();
    let book = {
      title: $('#title').val(),
      author: $('#author').val(),
      image_url: $('#image-url').val(),
      isbn: $('#isbn').val(),
      description: $('#description').val()
    };
    app.Book.create(book).then(() => page('/'));
  });
  module.bookCreateView = bookCreateView;

})(app);