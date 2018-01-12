'use strict';

var app = app || {};

(module => {
  const bookDetailView = {};

  bookDetailView.init = (book) => {
    $('#book-detail').empty();
    $('#book-detail').append(
      `<h2>${book.title}</h2>
               <img src="${book.image_url}" alt="${book.title}"/>
               <h3>by: ${book.author}</h3>
               <p>ISBN: ${book.isbn}</p>
               <h4>Description:</h4>
               <p>${book.description}</p>
              `
    );
    $('#book-detail').show();
  };

  module.bookDetailView = bookDetailView;
})(app);