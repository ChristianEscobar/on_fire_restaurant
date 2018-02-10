const getReserveapi = require("./getReserveapi");
const postReserveapi = require("./postReserveapi");

const path = require('path');

module.exports = {
	home(req,res){
		res.sendFile(path.join(__dirname, "public/index.html"));
	},

	table(req,res){
		res.sendFile(path.join(__dirname, "public/view.html"));
	},

	getReserve(req,res){getReserveapi.getReservations(req, res);},
	
	postReserve(req,res){postReserveapi.postReservations(req,res);}
}