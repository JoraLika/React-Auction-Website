const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema = new Schema({
	product: ObjectId,
	user: ObjectId,
	value: Number
});

module.exports = mongoose.model("Bid", schema);
