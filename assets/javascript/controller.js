const getReserveapi = require("./getReserveapi");
const postReserveapi = require("./postReserveapi");

module.exports = {
	home(req,res){console.log("hit home");},

	table(req,res){console.log("hit table");},

	getReserve(req,res){getReserveapi.getReservations(req, res);},
	
	postReserve(req,res){postReserveapi.postReservations(req,res);}


}