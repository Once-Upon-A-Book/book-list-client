'use strict';

var app = app || {};

(function(module){
  let bookView = {};
  bookView.displayBooks = function() {
    app.Book.getBooks(
      () => {
        $('#book-info').append(
          `<h2>Total Books: ${app.Book.all.length}</h2>`
        );
        app.Book.all.forEach(book => {
          $('#book-info').append(
            `<ul>
              <li>${book.title}</li>
              <li>${book.author}</li>
            </ul>`
          );
        });
      }
    );
  };
  module.bookView = bookView;
})(app);