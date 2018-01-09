'use strict';

//const _API_URL_ = 'https://al-ak-ec-booklist.herokuapp.com';
const _API_URL_ = 'http://localhost:3000';

var app = app || {};

(function(module) {
  function Book(rawBookObj) {

  }

  Book.all = [];

  Book.getBooks = function(callback) {
    console.log('got to getBooks method');
    $.get(`${_API_URL_}/api/v1/books`)
      .then(res => {
        res.forEach(data => {
          Book.all.push(data);
        });
        console.log('get books method array: ' + Book.all);
        callback();
      }).catch(error => console.error(error));
  };

  module.Book = Book;
})(app);