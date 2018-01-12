var app = app || {};

(module => {

  const bookCreateView = {};
  
  const $view = $('#book-create-view');

  bookCreateView.init = (books) => {
    
    $('.page').hide();    
    
    $view.append(`<h1>${book.title}</h1>`);    
    
    $view.show();

  module.bookCreateView = bookCreateView

})(app);