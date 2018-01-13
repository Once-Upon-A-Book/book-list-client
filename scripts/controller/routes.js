'use strict';

var app = app || {};

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