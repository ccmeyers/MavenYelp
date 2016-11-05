import { Model } from 'brainstem-js';

const Doctor = Model.extend({
  paramRoot: 'doctor',
  brainstemKey: 'doctors',
  urlRoot: '/api/v1/doctors',
});

export default Doctor;
