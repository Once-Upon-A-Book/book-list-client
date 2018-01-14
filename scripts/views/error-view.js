'use strict';

var app = app || {};

(function(module) {
  var errorView = {};
  errorView.initErrorPage = (err) => {
    console.log('error status text' + err.statusText);
    console.log('status' + err.status);
    $('.error-view').empty();
    err = {status: 'bad', statusText: 'not good'};
    const template = Handlebars.compile($('#error-template').text());
    $('.error-view').append(template(err));
    $('.error-view').show();
  };
  module.errorView = errorView;
})(app);