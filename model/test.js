// var flightModel = require('./model.js');

// flightModel.create({flightNumber : 123455, price : 122, dateAndTimeStored : new Date().toISOString()})
// 	.then(function(flight) {
// 		console.log("Flight Number : ",flightNumber,", price : ",price );
// 	});

var trackMeModel = require('./model.js');

var currentPrice = new trackMeModel({
	 flightNumber : 123,
	 price : 12123,
	 dateAndTimeStored : new Date().toISOString()
});

currentPrice.save(function(argument) {
	console.log('Yaayy!')
})