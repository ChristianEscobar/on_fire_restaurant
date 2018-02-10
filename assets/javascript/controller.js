const path = require("path");


module.exports = {
	home(req,res){
		console.log("hit home");
		var fileName = path.join(__dirname, "..", '..', "index.html");
		console.log(fileName);
		  res.sendFile(fileName, function (err) {
		    if (err) {
		      next(err);
		    } else {
		      console.log('Sent:', fileName);
		    }
		  });
		  // next();
	},

	table(req,res){console.log("hit table");},

	getReserve(req,res){console.log("hit reserve");},
	
	postReserve(req,res){console.log("hit reserve");}


}