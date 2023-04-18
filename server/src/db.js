const mongoose = require("mongoose");

async function connectTo(mongoUrl) {
	let status;

	try {
		await mongoose.connect(mongoUrl);
		status = true;

	} catch (connectionError) {
		console.error(`Problem connecting MongDb to URL: ${mongoUrl}`);
		status = false;
	}

	return status;
}

module.exports = { connectTo };
