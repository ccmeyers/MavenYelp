var StorageManager = require('brainstem-js').StorageManager;
var Doctors = require('./doctor-collection');

var storageManager = StorageManager.get();
storageManager.addCollection('doctors', Doctors);
