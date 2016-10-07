$(document).ready(function() {
  $('.doctors-index-btn').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'GET',
      dataType: 'json',
      url: '/api/v1/doctors'
    }).done(function(response) {
      console.log('done');
      console.log(response);
    }).fail(function(response) {
      console.log(response);
    });
  });
});
