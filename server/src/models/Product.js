const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema = new Schema({
	_id: ObjectId,
	owner: ObjectId,
	title: String,
	description: String,
	price: Number,
	itemImage: String,
	dueDate: Date
});

module.exports = mongoose.model("Product", schema);
