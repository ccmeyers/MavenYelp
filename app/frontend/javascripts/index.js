import initDoctors from './components/doctors/index';
import './storageManager';

function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(initDoctors);
