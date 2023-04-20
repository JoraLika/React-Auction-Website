const Authorizer = require("./Authorizer");
const Controller = require("./controller");

function create() {
	const express = require("express");
	const router = express.Router();

	// BEGIN: User
	router.post("/user", Controller.registerUser);
	router.get("/user" , Controller.loginWithUser);
	// END: User

	// BEGIN: Product
	router.get("/products"		, Controller.getAllProducts);
	router.get("/product/:id"	, Controller.getProduct);
	router.post("/product"		, Authorizer.verifyRequest, Controller.addProduct);
	router.delete("/product/:id", Authorizer.verifyRequest, Controller.removeProduct);
	// END: Product

	return router;
}

module.exports = { create };
