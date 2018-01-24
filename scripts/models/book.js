'use strict';

var app = app || {};

(module => {

  const _API_URL_ = 'https://al-ak-ec-booklist.herokuapp.com';
  // const _API_URL_ = 'http://localhost:3000';

  function Book() {}

  function errorCallback(err) {
    console.error(err);
    app.errorView.initErrorPage(err);
  }

  Book.fetchAll = () => $.getJSON(_API_URL_ + '/api/v1/books').catch(errorCallback);


  Book.fetchOne = (id) => $.getJSON(_API_URL_ + '/api/v1/books/' + id).catch(errorCallback);

  Book.deleteOne = id => {
    return $.ajax({
      url: _API_URL_ + '/api/v1/books/' + id,
      method: 'DELETE'
    }).catch(errorCallback);
  };

  Book.update = book => {
    return $.ajax({
      url: _API_URL_ + '/api/v1/books/' + book.book_id,
      method: 'PUT',
      data: book
    })
      .then(data => console.log(data))
      .catch(errorCallback);
  };

  Book.create = book => {
    console.log('book.create book ' + book.title);
    return $.post(_API_URL_ + '/api/v1/books', book).catch(errorCallback);
  };

  Book.verify = passphrase => {
    return $.get('http://localhost:3000/api/v1/admin', { token: passphrase }).catch(errorCallback);
  };

  module.Book = Book;

})(app);
