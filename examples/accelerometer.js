/*********************************************
This basic accelerometer example logs a stream
of x, y, and z data from the accelerometer
*********************************************/

var tessel = require('tessel');
var accel = require('../').use(tessel.port("A"));

// Initialize the accelerometer.
accel.on('ready', function () {
	// Stream accelerometer data
	accel.once('data', function (xyz) {
		console.log("x:", xyz[0].toFixed(2),
      "y:", xyz[1].toFixed(2),
      "z:", xyz[2].toFixed(2));
	});
});

accel.on('error', function(err) {
  console.log('error connecting', err);
})

setInterval(function(){}, 20000); 