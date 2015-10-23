var request = require('request');
var trackMeModel = require('../model/model.js');
var fs = require('fs');

var API = function(){}
API.prototype.storeFlightDate = function(origin, destination, departureFlightNumber, returnFlightNumber, price, callback) {
// console.log('--->',price, parseFloat(price.slice(3)), typeof(price), typeof(parseFloat(price.slice(3))))
	var data = {
		origin : origin,
		destination : destination,
		departureFlightNumber : departureFlightNumber,
		returnFlightNumber : returnFlightNumber,
		price : parseFloat(price.slice(3)),
		dateAndTimeStored : new Date().toISOString()
	};
	trackMeModel.create(data).then(function(flight) {
			console.log("Data stored : ", data );
			callback(true);
		});
}

API.prototype.fetchFlightData = function(callback) {
	trackMeModel.findAll().then(function(flights) {
		callback(flights);
	});
}

API.prototype.getFlights = function(origin, destination, departureDate, returningDate, callback){
	var requestBody = JSON.stringify({
	  "request": 
	  {
	  	"solutions" : 500,
	    "passengers": 
	    {
	      "adultCount": 1
	    },
	    "slice": 
	    [
	      {
	        "origin": origin,
	        "destination": destination,
	        "date": departureDate // YYYY-MM-DD
	      },
	      {
	        "origin": destination,
	        "destination": origin,
	        "date": returningDate // YYYY-MM-DD
	      }
	    ]
	  }
	});

	request.post({ 
	//Google QPX-Express API
	"url": "https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyDdyQmBmFv_0MToqaHmGRIea3INFETcX2M",
		"headers": {
			    'Content-Type': 'application/json'
			},
		"body" : requestBody

	}, function(error, res, data){
		data = JSON.parse(data);
		//console.log(data);
		if(!data.trips.tripOption)
		{
			callback(null);
		}
		else
		{
			callback(data.trips.tripOption);
		}
	});

};

API.prototype.syncOnExcel = function(destination, departureAirline, returnAirline){
	var data = '', date, time;
	trackMeModel.findAll({ where: {destination: destination} })
	.then(function(flights){
		var stream = fs.createWriteStream("flight_prices_" + destination + ".csv");
		stream.once('open', function(fd) {
		  stream.write("date\ttime\tdepartureAirline\tdepartureFlightNumber\treturnAirline\treturnFlightNumber\tprice\n");
			flights.forEach(function(flight, i){
				date = new Date(flight.dateAndTimeStored).toISOString().slice(0,10);
				time = new Date(flight.dateAndTimeStored).toISOString().slice(12,19); 
			  stream.write(date + "\t" + time + "\t" + departureAirline + "\t" + flight.departureFlightNumber + "\t" + 
			  	 returnAirline+ "\t" + flight.returnFlightNumber+ "\t" + Math.ceil(flight.price) + "\t" + "\n");
			});
		  stream.end();
		});
	});
}

module.exports = new API();