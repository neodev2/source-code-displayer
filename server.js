const
	express     = require('express'),
	app         = express(),
	server      = require('http').Server(app);

server.listen(process.env.PORT || 8000);

app.use('/resources', express.static(__dirname+'/public/resources'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/views/index.html');
});