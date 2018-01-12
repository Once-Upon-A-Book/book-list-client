'use strict';
var app = app || {};

module => {

const _API_URL_ = 'http://localhost:3000/api/v1/books';

  function Book() {

  }

  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);

  }

  Book.all = [];

  Book.fetchAll = () => $.getJSON(_API_URL_).catch(errorCallback)

  Book.fetchOne = (id) => $.getJSON(_API_URL_ + '/' + id).catch(errorCallback)
  
  Book.deleteOne = id => {
    return $.ajax({
      url: _API_URL_ + '/' + id,
      method: 'DELETE'
    }).catch(errorCallback)
  }

  Book.update = book => {
    return $.ajax({
      url: _API_URL_ + '/' + book.book_id,
      method: 'PUT',
      data: book
    }).catch(errorCallback)
  }

  Book.create = book => {
    return $.post(_API_URL_, book).catch(errorCallback)
  }

  //$("#bookListPage").show()

      //   res.forEach(data => {
      //     Book.all.push(data);
      //   });
      //   callback();
      // }).catch(error => console.error(error));
  };

  module.Book = Book;

})(app)