var trackMeModel = require('./model.js');

trackMeModel.findAll().then(function(flights) {
	flights.forEach(function(flight){
		console.log(flight.dateAndTimeStored, "---", flight.price)
	})
});
	// var data = {
	// 	origin : 'msp',
	// 	destination : 'dfw',
	// 	departureFlightNumber : 749,
	// 	returnFlightNumber : 742,
	// 	price : 166.20,
	// 	dateAndTimeStored : new Date('2015-09-16T12:00:20.060Z').toISOString()
	// };
	// trackMeModel.create(data).then(function(flight) {
	// 		console.log("Data stored : ", data );
	// 	});
	// var data = {
	// 	origin : 'msp',
	// 	destination : 'dfw',
	// 	departureFlightNumber : 749,
	// 	returnFlightNumber : 742,
	// 	price : 166.20,
	// 	dateAndTimeStored : new Date('2015-09-16T16:00:53.517Z').toISOString()
	// };
	// trackMeModel.create(data).then(function(flight) {
	// 		console.log("Data stored : ", data );
	// 	});
	// var data = {
	// 	origin : 'msp',
	// 	destination : 'dfw',
	// 	departureFlightNumber : 749,
	// 	returnFlightNumber : 742,
	// 	price : 166.20,
	// 	dateAndTimeStored : new Date('2015-09-16T20:00:36.137Z').toISOString()
	// };
	// trackMeModel.create(data).then(function(flight) {
	// 		console.log("Data stored : ", data );
	// 	});



	// var data = {
	// 	origin : 'msp',
	// 	destination : 'jfk',
	// 	departureFlightNumber : 249,
	// 	returnFlightNumber : 248,
	// 	price : 336.20,
	// 	dateAndTimeStored : new Date('2015-09-16T12:00:20.060Z').toISOString()
	// };
	// trackMeModel.create(data).then(function(flight) {
	// 		console.log("Data stored : ", data );
	// 	});
	// var data = {
	// 	origin : 'msp',
	// 	destination : 'jfk',
	// 	departureFlightNumber : 249,
	// 	returnFlightNumber : 248,
	// 	price : 336.20,
	// 	dateAndTimeStored : new Date('2015-09-16T16:00:53.517Z').toISOString()
	// };
	// trackMeModel.create(data).then(function(flight) {
	// 		console.log("Data stored : ", data );
	// 	});
	// var data = {
	// 	origin : 'msp',
	// 	destination : 'jfk',
	// 	departureFlightNumber : 249,
	// 	returnFlightNumber : 248,
	// 	price : 336.20,
	// 	dateAndTimeStored : new Date('2015-09-16T20:00:36.137Z').toISOString()
	// };
	// trackMeModel.create(data).then(function(flight) {
	// 		console.log("Data stored : ", data );
	// 	});
	
	// flightModel.create({
	// 	origin : 'MSP',
	// 	destination : 'dfw',
	// 	departureFlightNumber : 472,
	// 	returnFlightNumber : 233,
	// 	price : 148.20,
	// 	dateAndTimeStored : new Date().toISOString()
	// }).then(function(flight) {
	// 		console.log("Flight HeeyyyyyyyyyyyHeeyyyyyyyyyyyHeeyyyyyyyyyyy" );
	// 	});
// var trackMeModel = require('./model.js');

// var currentPrice = new trackMeModel({
// 	 flightNumber : 123,
// 	 price : 12123,
// 	 dateAndTimeStored : new Date().toISOString()
// });

// currentPrice.save(function(argument) {
// 	console.log('Yaayy!')
// })