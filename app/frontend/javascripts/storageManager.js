import { StorageManager } from 'brainstem-js';
import Doctors from './doctor-collection';

const storageManager = StorageManager.get();
storageManager.addCollection('doctors', Doctors);
