'use strict';

//const _API_URL_ = 'https://al-ak-ec-booklist.herokuapp.com';
const _API_URL_ = 'http://localhost:3000'
$.getJSON(`${_API_URL_}/test`)
    .then(res => {
        $('#data-spot').append(JSON.stringify(res))
  }
        res.forEach(thing => {
            $('#data-spot').append(`<li>${books.title}</li>`)
        })
    }).catch(error => console.error(error))