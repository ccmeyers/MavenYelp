var BrainstemModel = require('brainstem-js').Model;

var Doctor = BrainstemModel.extend({
  paramRoot: 'doctor',
  brainstemKey: 'doctors',
  urlRoot: '/api/v1/doctors',
});

module.exports = Doctor;
