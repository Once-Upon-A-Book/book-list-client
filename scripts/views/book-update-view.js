'use strict';

var app = app || {};

(module => {
  let bookUpdateView = {};

  bookUpdateView.init = (book) => {
    $('#book-update').show();
    $('#book-update').append(`    
    <h1>${book.title}</h1>
    <form id="update-info">
        <input id="update-title" type="text" placeholder="title" value="${book.title}" required>
        <input id="update-author" type="text" placeholder="author" value="${book.author}" required>
        <input id="update-image-url" type="text" placeholder="image url" value="${book.image_url}" required>
        <input id="update-isbn" type="text" placeholder="ISBN" value="${book.isbn}" required>
        <textarea id="update-description" placeholder="book descrption" required>${book.description}</textarea>
        <button type="submit">Submit</button>
    </form>
    `);

    $('#update-info').on('submit', function(e) {
      e.preventDefault();
      let updatedBook = {
        title: $('#update-title').val(),
        author: $('#update-author').val(),
        image_url: $('#update-image-url').val(),
        isbn: $('#update-isbn').val(),
        description: $('#update-description').val(),
        book_id: book.book_id
      };
      app.Book.update(updatedBook).then(() => page('/'));
    });
  };

  module.bookUpdateView = bookUpdateView;

})(app);