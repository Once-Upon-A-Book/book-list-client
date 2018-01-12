// import { link } from "fs";

'use strict';

var app = app || {};

(function(module){
  let bookListView = {};

  const $view = $('#book-info');

  bookListView.init = (books) => {
    $view.empty();
    $view.append(`<h1>Total Books ${books.length}</h1>`);
    $view.append(`<ul id="book-list"></ul>`);
    books.forEach(book => {
      $('#book-list').append(`<li><a href="/books/${book.book_id}">${book.book_id}. ${book.title} by ${book.author}</a></li>`);
    });
    $view.show();
  };

  module.bookListView = bookListView;
})(app);