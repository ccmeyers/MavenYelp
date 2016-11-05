import { Collection } from 'brainstem-js';
import Doctor from './doctor.js';

const Doctors = Collection.extend({
  model: Doctor,
  url: '/api/v1/doctors',
});

export default Doctors;
