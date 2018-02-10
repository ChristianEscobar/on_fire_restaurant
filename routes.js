const controller = require("./controller.js");

module.exports = (app) => {

	app.get("/",controller.home);
	app.get("/view",controller.table);
	app.get("/reserve", controller.getReserve);
	app.post("/reserve",controller.postReserve);
}