const User = require("./models/User");

async function verifyRequest(req, res, next) {
	const headers = req.headers;
	if (!headers.username || !headers.password) return res.status(401).json({ data: { error: "Missing username and/or password." } });

	try {
		const user = await User.findOne({
			username: headers.username,
			password: headers.password
		});

		if (!user) throw new Error("No user found!");

		next();

	} catch (error) {
		console.error(error);
		res.status(401).json({ data: { error } });
	}
}

module.exports = { verifyRequest };
