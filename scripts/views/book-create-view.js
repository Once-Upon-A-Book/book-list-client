'use strict';

var app = app || {};

(function(module){
  let bookCreateView = {};

  bookCreateView.init = () => {
    $('#book-new').show();
  };

  $('#add-book').on('submit', function() {
    let book = {
      title: $('#title').val(),
      author: $('#author').val(),
      image_url: $('#image-url').val(),
      isbn: $('#isbn').val(),
      description: $('#description').val()
    };
    app.Book.create(book);
  });

  module.bookCreateView = bookCreateView;

})(app);