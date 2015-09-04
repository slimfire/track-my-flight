var request = require('request');
var trackMeModel = require('../model/model.js');
var fs = require('fs');

var API = function(){}
API.prototype.storeFlightDate = function(origin, destination, departureFlightNumber, returnFlightNumber, price, callback) {

	var currentPrice = new trackMeModel({
		origin : origin,
		destination : destination,
		departureFlightNumber : departureFlightNumber,
		returnFlightNumber : returnFlightNumber,
		price : price.slice(3),
		dateAndTimeStored : new Date().toISOString()
	});
	currentPrice.save(function(error) {
		console.log(error)
		if(!error)
		{
			callback(true);
		}
		else
		{
			callback(false);
		}
	})
}

API.prototype.fetchFlightData = function(callback) {
	trackMeModel.find({}, function(error, flight) {
		if(!error)
		{
			callback(flight);
		}
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

module.exports = new API();