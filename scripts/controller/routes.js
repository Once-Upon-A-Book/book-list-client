'use strict';

var app = app || {};

<<<<<<< HEAD
// if (window.location !== '/') page.base('/book-list-client');

// if (window.location.pathname !== '/') {page.base('/book-list-client');
// }

=======
>>>>>>> a5aebe0a443d779d1cfd7144f3b2a137b1ae5374
page('/*', (ctx, next) => {

  if (localStorage.getItem('token')) {
    $('.protected').show();
  } else {
    $('.protected').hide();
  }

  $('.page').hide();
  next();
});

page('/books/new/', () => app.bookCreateView.init());

page('/', () => {
  app.Book.fetchAll().then(books => {
    app.bookListView.init(books);
  });
});

page('/books/:id', (ctx) => {
  app.Book.fetchOne(ctx.params.id)
    .then(book => {
      app.bookDetailView.init(book);
    });
});

page.start();