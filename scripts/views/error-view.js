'use strict';

var app = app || {};

(function(module) {
  var errorView = {};
  errorView.initErrorPage = (err) => {
    $('.error-view').empty();
    err = {status: 'bad', statusText: 'not good'};
    const template = Handlebars.compile($('#error-template').text());
    $('.error-view').append(template(err));
    $('.error-view').show();
  };
  module.errorView = errorView;
})(app);