'use strict';

var app = app || {};

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5fa782644761523dfdf72159a38e7ce8f6637a51
// if (window.location !== '/') page.base('/book-list-client');

// if (window.location.pathname !== '/') {page.base('/book-list-client');
// }

<<<<<<< HEAD
=======
>>>>>>> a5aebe0a443d779d1cfd7144f3b2a137b1ae5374
=======
>>>>>>> 5fa782644761523dfdf72159a38e7ce8f6637a51
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

page('/books/:id/update', (ctx) => {
  app.Book.fetchOne(ctx.params.id)
    .then(book => {
      app.bookDetailView.init(book);
      console.log('pass to view to update');
    });
});

page.start();