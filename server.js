var app = require('express')(),
	methodOverride = require('method-override'),
	bodyParser = require('body-parser'),
	errorHandler = require('errorhandler');

app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

switch(app.get('env'))
{
	case "development":
		app.use(errorHandler({dumpExceptions : true, showStack: true}));
		break;
	case "production":
		app.use(errorHandler());
		break;
}


console.log('Server running on port 3000 . . . ');
app.listen(process.env.PORT || 3000);