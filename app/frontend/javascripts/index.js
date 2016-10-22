require('expose?$!expose?jQuery!jquery');
require('./storageManager');
var Doctor = require('./doctor');
var Doctors = require('./doctor-collection');

$(document).ready(() => {
  $('.doctors-index-btn').on('click', e => {
    e.preventDefault();
    // $.ajax({
    //   method: 'GET',
    //   dataType: 'json',
    //   url: '/api/v1/doctors'
    // }).done(response => {
    //   console.log('here are your doctors');
    //   console.log(response);
    // }).fail(response => {
    //   console.log(response);
    // });
    new Doctors().fetch().done(response => {
      console.log('here are your doctors');
      console.log(response);
    }).fail(response => {
      console.log(response);
    });
    // new Doctor({id: 2}).fetch().done(response => {
    //   console.log('here is doctor 2');
    //   console.log(response);
    // }).fail(response => {
    //   console.log(response);
    // });
  });
});
