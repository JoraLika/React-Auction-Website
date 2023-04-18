require("dotenv").config();

const appName = "Auction APP"; 
const port = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

const DB = require("./db");
const Server = require("./server");

async function start() {
	try {
		await DB.connectTo(DB_URL);
		const server = Server.createServer();
		server.listen(port, () => console.log(`${appName} running on port ${port}!`));

	} catch (error) {
		console.error(`Problem starting application: ${error.stack}`);
	}

}

start();
