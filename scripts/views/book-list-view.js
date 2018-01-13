'use strict';

var app = app || {};

(module => {

  let bookListView = {};

  const $view = $('#book-info');

  bookListView.init = (books) => {
    $view.empty();
    $view.append(`<h1>My Books ${books.length}</h1>`);
    $view.append(`<div id="book-list"></div>`);
    books.forEach(book => {
      $('#book-list').append(`
      <div class="book-square">
          <div class="image-container">
            <img class="preview-image" src="${book.image_url}" alt="${book.title}"/>
          </div>
        <div class="book-summary">
          <a href="/books/${book.book_id}"><h3>${book.title}</h3></a>
          <p>${book.author}</p>
        <div class="view-more">
          <a href="/books/${book.book_id}"><button class="view-button">View Details</button></a>
        </div>
        </div>
      </div>`);
    });
    $view.show();
  };

  module.bookListView = bookListView;
})(app);
