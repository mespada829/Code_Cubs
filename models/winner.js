var orm = require('../config/orm.js');
console.log("Loaded winner")
var winner = {

all: function(cb) {

	orm.all('winner', function(res){

		cb(res);
		

	});
},

create: function (cols, vals, cb) {

	orm.create('winner', cols, vals, function(res){

		cb(res);

	});
},
update: function(objColVals, condition, cb) {

	orm.update('winner', objColVals, condition, function(res){

		cb(res);

	});
	
  },
  delete: function(condition, cb) {

	orm.delete('winner', condition, function(res){

		cb(res);

	});
	
  }

};

module.exports = winner;