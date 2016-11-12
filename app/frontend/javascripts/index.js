import './storageManager';
import initDoctors from './components/doctors/index';

function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(initDoctors);
