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
				email: query.email,
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
				id: req.params.id
			});

		} catch (findError) {
			console.error(findError);
			res.status(500);
		}

		res.json({ data: product });
	},


	addProduct: async (req, res) => {
		const body = req.body;
		let productData = {
			owner: mongoose.Types.ObjectId(owner),
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
	
}
