var mysql = require('mysql');
var connection = mysql.createConnection({
	port: 3306,	
	host: 'wftuqljwesiffol6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'wcvynzdkzgtyntls',
	password: "scnp3qm2l3affz4d",
	database: 'lw41wiyr230xig8d',
});

connection.connect(function(err){

	if(err){
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

