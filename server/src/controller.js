const mongoose = require("mongoose");

const Product = require("./models/Product");
const User = require("./models/User");

module.exports = {

	registerUser: async (req, res) => {
		const body = req.body;
		let userData = {
			email: body.email,
			username: body.username,
			password: body.password,
			wallet: 1000
		};
		
		try {
			const user = new User(userData);
			await user.save();

		} catch (error) {
			console.error(error);
			userData = { error };
			res.status(500);
		}

		res.json({ data: userData });
	},

	loginWithUser: async (req, res) => {
		let user = null;
		
		try {	
			const query = req.query;
			user = await User.findOne({
				username: query.username,
				password: query.password
			});

		} catch (findError) {
			console.error(findError);
			res.status(500);
		}

		res.json({ data: user});
	},


	getAllProducts: async (req, res) => {
		let products = [];
		
		try {
			products = await Product.find();

		} catch (findError) {
			console.error(findError);
			res.status(500);
		}

		res.json({ data: products });
	},

	getProduct: async (req, res) => {
		let product = null;
		
		try {
			product = await Product.findOne({
				_id: new mongoose.Types.ObjectId(req.params.id)
			});

		} catch (findError) {
			console.error(findError);
			res.status(500);
		}

		res.json({ data: product });
	},


	removeProduct: async (req, res) => {
		let result;
		
		try {
			let res = await Product.deleteOne({
				_id: new mongoose.Types.ObjectId(req.params.id)
			});
			console.log(res);
			result = "Successfully removed product";
			
		} catch (findError) {
			result = "There was a problem removing the product!";
			console.error(findError);
			res.status(500);
		}

		res.json({ data: result });
	},


	addProduct: async (req, res) => {
		const body = req.body;
		let productData = {
			owner: new mongoose.Types.ObjectId(body.owner),
			title: body.title,
			description: body.description,
			price: body.price,
			itemImage: body.itemImage,
			dueDate: new Date(body.dueDate)
		};
		
		try {
			const product = new Product(productData);
			await product.save();

		} catch (error) {
			console.error(error);
			productData = { error };
			res.status(500);
		}

		res.json({ data: productData });
	}
	
};
