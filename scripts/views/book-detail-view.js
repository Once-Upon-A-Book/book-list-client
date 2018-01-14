'use strict';

var app = app || {};

(module => {
  const bookDetailView = {};

  bookDetailView.init = (book) => {
    $('#book-detail').empty();
    $('#book-detail').append(
      `
        <h2>${book.title}</h2>  
        <div class="detail-meta">
          <p>${book.author}</p>
          <p>${book.isbn}</p>
        </div>
        <div class="detail-image-cont">
          <img class="detail-image" src="${book.image_url}" alt="${book.title}"/>
        </div>
        <p>${book.description}</p>
        <button class="update-button" data-id="${book.book_id}">Update</button>
        <button class="delete-button" data-id="${book.book_id}">Delete</button>
      `
    );
    $(`button.delete-button[data-id=${book.book_id}]`).one('click', function(e) {
      e.preventDefault(); 
      app.Book.deleteOne(book.book_id).then(() => bookDetailView.init(book));

    });
    $(`button.update-button[data-id=${book.book_id}]`).one('click', function(e) {
      e.preventDefault();
      console.log('here is the update button');
      app.bookUpdateView.init(book);

    });
    $('#book-detail').show();
  };

  module.bookDetailView = bookDetailView;
})(app);