/**** Node.js libraries *****/
const path = require("path");

/**** External libraries ****/
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

/**** Configuration ****/
const app = express();
const Routes = require("./routes");

function createServer() {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(morgan("combined"));
	app.use(cors());
	app.use(express.static(path.resolve("..", "client", "build")));
	
	/**** Add routes ****/
	const routes = Routes.create();
	app.use("/api", routes);

	// "Redirect" all non-API GET requests to React"s entry point (index.html)
	app.get("*", (req, res) =>
		res.sendFile(path.resolve("..", "client", "build", "index.html"))
	);

	return app;
}

module.exports = { createServer };