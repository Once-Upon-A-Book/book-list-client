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

  bookView.displayOneBook = function(id) {
    app.Book.fetchOne(id, 
      () => {
        $('#book-detail').empty();
        $('#book-detail').append(
          `<h2>${app.Book.current.title}</h2>
           <img src="${app.Book.current.image_url}" alt="${app.Book.current.title}"/>
           <h3>by: ${app.Book.current.author}</h3>
           <p>ISBN: ${app.Book.current.isbn}</p>
           <h4>Description:</h4>
           <p>${app.Book.current.description}</p>
          `
        );
      }
    );
  };

  $('.error-view').hide();

  $('#add-book').on('submit', function() {
    let title = $('#title').val();
    let author = $('#author').val();
    let image = $('#image-url').val();
    let isbn = $('#isbn').val();
    let description = $('#description').val();
    app.Book.create(title, author, image, isbn, description);
    bookView.displayBooks();
  });

  module.bookView = bookView;
})(app);