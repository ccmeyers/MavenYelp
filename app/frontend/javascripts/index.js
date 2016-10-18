require('expose?$!expose?jQuery!jquery');

$(document).ready(() => {
  $('.doctors-index-btn').on('click', e => {
    e.preventDefault();
    $.ajax({
      method: 'GET',
      dataType: 'json',
      url: '/api/v1/doctors'
    }).done(response => {
      console.log('here are your doctors');
      console.log(response);
    }).fail(response => {
      console.log(response);
    });
  });
});
