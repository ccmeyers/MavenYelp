var BrainstemCollection = require('brainstem-js').Collection;
var Doctor = require('./doctor.js');

var Doctors = BrainstemCollection.extend({
  model: Doctor,
  url: '/api/v1/doctors',
});

module.exports = Doctors;
