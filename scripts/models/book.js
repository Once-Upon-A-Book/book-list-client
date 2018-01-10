'use strict';

//const _API_URL_ = 'https://al-ak-ec-booklist.herokuapp.com';
const _API_URL_ = 'http://localhost:3000';

var app = app || {};

(function(module) {
  function Book(rawBookObj) {

  }

  Book.all = [];

  Book.current;

  Book.getBooks = function(callback) {
    $.get(`${_API_URL_}/api/v1/books`)
      .then(res => {
        res.forEach(data => {
          Book.all.push(data);
        });
        callback();
      }).catch(error => console.error(error));
  };

  Book.fetchOne = function(id, callback) {
    $.get(`${_API_URL_}/api/v1/books/${id}`)
      .then(res => {
        Book.current = res[0];
        callback();
      }).catch(error => console.error(error));
  };

  Book.create = function(title, author, image_url, isbn, description) {
    $.post(`${_API_URL_}/api/v1/books`, {
      title,
      author,
      image_url,
      isbn,
      description
    }).then(results => {
      console.log('post results', results);
    });
  };

  module.Book = Book;
})(app);