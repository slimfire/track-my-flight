var Sequelize = require('sequelize'),
	sequelize = new Sequelize('mysql://b273629b223b06:3d076ab9@us-cdbr-iron-east-02.cleardb.net/heroku_01d39d5e0e00f53?reconnect=true');

var flights = sequelize.define('flights', {
	origin : Sequelize.STRING,
	destination : Sequelize.STRING,
	departureFlightNumber : {
		type : Sequelize.INTEGER,
		field : 'departure_flight_number'
	},
	returnFlightNumber : {
		type : Sequelize.INTEGER,
		field : 'return_flight_number'
	},
	price : {
		type : Sequelize.DOUBLE,
		field : 'price'
	},
	dateAndTimeStored : {
		type : Sequelize.STRING,
		field : 'date_and_time_stored'
	}
});
sequelize.sync()
// flights.drop();
module.exports = flights;

// var mongoose = require('mongoose');
// var schema = mongoose.Schema;

// mongoose.connect('mongodb://db_user:db_password@ds035603.mongolab.com:35603/heroku_4rgms0j3');

// var trackMeSchema = new schema({
// 	origin : String,
// 	destination : String,
// 	departureFlightNumber : Number,
// 	returnFlightNumber : Number,
// 	price : Number,
// 	dateAndTimeStored : Date
// }, {collection : 'flightPriceTracker'});

// var trackMeModel = mongoose.model('flightPriceTracker', trackMeSchema);

// module.exports = trackMeModel;