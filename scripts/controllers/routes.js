//$(document).ready = () => {
page('/*', (ctx, next) => { //user went to this url (home route), some work needs to be done. Cant do work, needs data. Route is going to then talk to app.book (book model) to get the data, now he has it and can give it to view. Says view do your thing, here you go. {In general: went to some path and need the data associated with that path. Need an id, passes it off to the model, model sends it to route, route sends it to view. Controller knits everything together}
    $('.page').hide()
    next()    
});

page('/', () => {
  app.Book.fetchAll().then(books => {
    app.bookListPage.initIndexView(books); // I want the data, when i get it, i'll pass it along.

page('/books/:id', (ctx) => {

  app.Book.fetchOne(ctx.params.id).then(book => {
    app.bookDetailPage.init(book)
});

  $('#book-detail-page').show();
});

page('/books/create', () => {
  $('#book-create-page').show();
});

page('/error', () => {
  $('#error-page').show();
});

page.start();

// })