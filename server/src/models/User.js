const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
	email: String,
	username: String,
	password: String,
	wallet: Number
});

module.exports = mongoose.model("User", schema);
