var API = require('./api.js');
var TrackMe = require('./trackMe.js');
var utils = require('./utils.js');
API.syncOnExcel('dfw');
API.syncOnExcel('jfk');
API.syncOnExcel('sfo');
// var parsedFlights = [];
// API.getFlights('msp', 'jfk', '2015-11-19', '2015-11-24', function(flights) {
// 	if(flights)
// 	{	
// 		// console.log(flights);
// 		flights.forEach(function(flight, i){
// 			if(parseInt(flights[i].slice[0].segment[0].flight.number) == 243 && parseInt(flights[i].slice[1].segment[0].flight.number) == 240)
// 			{
// 				console.log('Yaay!');
// 				console.log('Price : ', flights[i].pricing[0].saleTotal);
// 				console.log('Date/Time : 0', new Date().toISOString());
// 				parsedFlights.push(flights[i]);
// 			}
// 		});
// 	}
// });


// utils.sendGrid();