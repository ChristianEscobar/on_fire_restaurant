let storage = require("./storage");

//mock data

exports.getTables = function(){
	return storage.tableReservations;
}

exports.getWaitingList = function(){
	return storage.tableWaitList;
}