const User = require("./models/User");

async function verifyRequest(req, res, next) {
	const headers = req.headers;
	if (!headers.email || !headers.password) return res.status(401).json({ data: { error: "Missing email and/or password." } });

	try {
		const user = await User.findOne({
			email: headers.email,
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
