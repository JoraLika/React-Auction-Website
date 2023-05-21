const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const Bid = require("./models/Bid");
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

		res.json({ data: user });
	},


	getAllProducts: async (req, res) => {
		let products = [];
		
		try {
			products = await Product.find();

			const productProms = products.map(async (product) => {
				console.log(product);
				let user = await User.findOne({_id: product.owner});
				return {
					_id: product._id,
					owner: product.owner,
					ownerName: user.username,
					title: product.title,
					description: product.description,
					price: product.price,
					itemImage: product.itemImage,
					dueDate: product.dueDate
				};
			});
			products = await Promise.all(productProms);

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
				_id: new ObjectId(req.params.id)
			});

		} catch (findError) {
			console.error(findError);
			res.status(500);
		}

		res.json({ data: product });
	},


	addProduct: async (req, res) => {
		let productData = {};
		
		try {
			const headers = req.headers;
			const user = await User.findOne({
				username: headers.username,
				password: headers.password
			});
			
			const body = req.body;
			productData = {
				owner: user._id,
				title: body.title,
				description: body.description,
				price: body.price,
				itemImage: body.itemImage,
				dueDate: new Date(body.dueDate)
			};

			const product = new Product(productData);
			await product.save();

		} catch (error) {
			console.error(error);
			productData = { error };
			res.status(500);
		}

		res.json({ data: productData });
	},
	

	removeProduct: async (req, res) => {
		let result;
		
		try {
			let res = await Product.deleteOne({
				_id: new ObjectId(req.params.id)
			});
			if (res.deletedCount === 0) throw new Error(`No product with that id: ${req.params.id}`);

			result = "Successfully removed product";

		} catch (findError) {
			result = "There was a problem removing the product!";
			console.error(findError);
			res.status(500);
		}

		res.json({ data: result });
	},


	getBidsForProductId: async (req, res) => {
		let bids = [];
		
		try {
			bids = await Bid.find({
				product: new ObjectId(req.params.productId)
			});

		} catch (findError) {
			console.error(findError);
			res.status(500);
		}

		res.json({ data: bids });
	},


	addBid: async (req, res) => {
		const body = req.body;
		let bidData = {
			product: new ObjectId(body.productId),
			user: new ObjectId(body.userId),
			value: body.value
		};
		
		try {
			const bid = new Bid(bidData);
			await bid.save();

		} catch (error) {
			console.error(error);
			bidData = { error };
			res.status(500);
		}

		res.json({ data: bidData });
	},


	removeBid: async (req, res) => {
		let result;
		
		try {
			let res = await Bid.deleteOne({
				_id: new ObjectId(req.params.id)
			});
			if (res.deletedCount === 0) throw new Error(`No bid with that id: ${req.params.id}`);

			
			result = "Successfully removed bid";

		} catch (findError) {
			result = "There was a problem removing the bid!";
			console.error(findError);
			res.status(500);
		}

		res.json({ data: result });
	},

};
