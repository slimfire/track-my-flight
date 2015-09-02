var api = require('./api.js');
var utils = require('./utils.js');
var TrackMe = function (){}

TrackMe.prototype.flight = function(origin, destination, departureDate, returningDate, departureFlightNumber, returnFlightNumber){
	api.getFlights(origin, destination, departureDate, returningDate, function(flights) {
		if(flights)
		{	
			flights.forEach(function(flight, i){
				if(parseInt(flights[i].slice[0].segment[0].flight.number) == departureFlightNumber && parseInt(flights[i].slice[1].segment[0].flight.number) == returnFlightNumber)
				{
					console.log('Yaay!');
					console.log('Price : ', flights[i].pricing[0].saleTotal);
					console.log('Date/Time : ', new Date().toISOString());
					api.storeFlightDate(origin, destination, departureFlightNumber, returnFlightNumber, flights[i].pricing[0].saleTotal, function(status){
						console.log(status);
						if(status)
						{
							console.log("Yaaay!! Data stored on DB. ")
							utils.sendEmail('yohazel2@gmail.com', '<h1>Flight tracked</h1> <br> <b> Date : </b>' + 
								new Date().toISOString() + '<br><b> Origin : </b>' + origin + '<br><b> Destination : </b>'
								 + destination + '<br><b>Price : </b>' + flights[i].pricing[0].saleTotal + '<br><b>Flight Numbers : </b>' + 
								 departureFlightNumber + ' and ' + returnFlightNumber )
						}
					});
				}
				else
				{
					console.log('naa : ')
				}
			});
		}
	});
}

module.exports = new TrackMe();