'use strict';

var app = app || {};

(module => {
  const adminView = {};

  const $view = $('#admin-view');

  adminView.username = 'admin';
  adminView.password = '1234';

  adminView.verify = () => {
    if (localStorage.getItem('loggedIn')) {
      console.log('we have local storage ture');
      $('.admin-only').show();
      $('.public').hide();
    } else {
      $('.admin-only').hide();
      $('.public').show();
    }
  };

  adminView.init = () => {
    $('#login-form').one('submit', function (e) {
      e.preventDefault();
      console.log('login form submit');
      let username = $('#username').val();
      let password = $('#password').val();
      console.log('username ' + username);
      console.log('password ' + password);
      if (username === adminView.username && password === adminView.password) {
        console.log('user login matches');
        let isLoggedIn = JSON.stringify('true');
        localStorage.setItem('loggedIn', isLoggedIn);
        adminView.verify();
      }
    });
    $view.show();
  };



  module.adminView = adminView;

})(app);