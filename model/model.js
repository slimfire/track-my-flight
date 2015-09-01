// var Sequelize = require('sequelize'),
// 	sequelize = new Sequelize('mysql://b273629b223b06:3d076ab9@us-cdbr-iron-east-02.cleardb.net/heroku_01d39d5e0e00f53?reconnect=true');

// var flights = sequelize.define('flights', {
// 	flightNumber : {
// 		type : Sequelize.INTEGER,
// 		field : 'flight_number'
// 	},
// 	price : {
// 		type : Sequelize.DOUBLE,
// 		field : 'price'
// 	},
// 	dateAndTimeStored : {
// 		type : Sequelize.STRING,
// 		field : 'date_and_time_stored'
// 	}
// });

// flights.sync({force : true}).then(function(argument) {
// 	return flights.create({flightNumber : 123455, price : 122, dateAndTimeStored : new Date().toISOString()});
// });
// module.exports = flights;

var mongoose = require('mongoose');
var schema = mongoose.Schema;

mongoose.connect('mongodb://db_user:db_password@ds035603.mongolab.com:35603/heroku_4rgms0j3');

var trackMeSchema = new schema({
	origin : String,
	destination : String,
	departureFlightNumber : Number,
	returnFlightNumber : Number,
	price : Number,
	dateAndTimeStored : Date
}, {collection : 'flightPriceTracker'});

var trackMeModel = mongoose.model('flightPriceTracker', trackMeSchema);

module.exports = trackMeModel;