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
      `
    );
    $('#book-detail').show();
  };

  module.bookDetailView = bookDetailView;
})(app);