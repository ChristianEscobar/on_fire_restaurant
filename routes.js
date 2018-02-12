const controller = require("./controller.js");

module.exports = (app) => {

	app.get("/index",controller.home);
	app.get("/view",controller.table);
	app.get("/api/table", controller.apiTable);
	app.get("/api/waitingList", controller.apiWaitingList);
	app.get("/reserve", controller.getReserve);

	app.post("/api/reserve",controller.postReserve);
}