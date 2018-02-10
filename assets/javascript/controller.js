const getReserveapi = require("./getReserveapi");
const postReserveapi = require("./postReserveapi");

const path = require('path');

module.exports = {
	home(req,res){
		console.log('test')
		res.sendFile(path.join(__dirname, "../../index.html"));
	},

	table(req,res){console.log("hit table");},

	getReserve(req,res){getReserveapi.getReservations(req, res);},
	
	postReserve(req,res){postReserveapi.postReservations(req,res);}
}