let storage = require("./storage");

exports.postReservations = (req, res) => {
	storage.addReservation(req.body);
}