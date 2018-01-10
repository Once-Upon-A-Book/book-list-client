'use strict';

//const _API_URL_ = 'https://al-ak-ec-booklist.herokuapp.com';
const _API_URL_ = 'http://localhost:3000/api/v1/books';

var app = app || {};

(function(module) {
  function Book(rawBookObj) {

  }

  Book.all = [];

  Book.getBooks = function(callback) {
    $.getJSON(_API_URL_)
      .then(res => {
        res.forEach(data => {
          Book.all.push(data);
        });
        callback();
      }).catch(error => console.error(error));
  };

  module.Book = Book;
})(app);