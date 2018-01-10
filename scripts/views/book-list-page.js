var app = app || {};

(module => {

  const bookListPage = {};

  bookListPage.initIndexView = (books) => {
   
    books.forEach(book => {
      $('#book-list').append(`<li data-id="${book.book_id}">${book.title}"</li>`);
    });

    $('#book-list').on('click', 'li', (event) => { //event handler to capture the click
      $(event.target).data('id');
      page('/books/' + id);
    });

    $('#book-list-page').show();
  };

  module.bookListPage = bookListPage

})(app);
