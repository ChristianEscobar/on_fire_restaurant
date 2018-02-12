let storage = require("./storage");
const tableapi = require("./tableapi.js");

exports.postReservations = (req, res) => {
	if(tableapi.getTables().length < 5){
		tableapi.getTables().push(req.body);
		res.json(true);
	}
	else{
		tableapi.getWaitingList().push(req.body);
		res.json(false);	
	}
}