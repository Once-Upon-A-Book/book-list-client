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
        <a href="/books/update/${book.book_id}"><button data-id="${book.book_id}">Update</button></a>
        <button class="delete-button" data-id="${book.book_id}">Delete</button>
      `
    );
    $(`button[data-id="delete-button"]`).one('click', function(e) {
      e.preventDefault(); 
      app.Book.deleteOne(book.book_id).then(() => page(`/`));
    });
    $('#book-detail').show();
  };

  module.bookDetailView = bookDetailView;
})(app);