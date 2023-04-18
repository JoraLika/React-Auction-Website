const Controller = require("./controller");

module.exports = () => {
	const express = require("express");
	const router = express.Router();

	// BEGIN: User
	router.post("/user", Controller.registerUser);
	router.get("/user" , Controller.loginWithUser);
	// END: User

	// BEGIN: Product
	router.get("/products"		, Controller.getAllProducts);
	router.get("/product/:id"	, Controller.getProduct);
	router.post("/product"		, Controller.addProduct);
	// END: Product

	return router;
}
