let tableReservations = [];

let tableWaitList = [];

exports.addReservation = (newReservation) => {
	if(tableReservations.length > 5) {
		tableWaitList.push(newReservation);
	} else {
		tableReservations.push(newReservation);
	}
}

exports.getReservations = () => {
	return tableReservations;
}

exports.getWaitList = () => {
	return tableWaitList;
}