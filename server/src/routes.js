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
	router.options("/product"	, Authorizer.verifyRequest);
	router.post("/product"		, Authorizer.verifyRequest, Controller.addProduct);
	router.options("/product/:id", Authorizer.verifyRequest);
	router.delete("/product/:id", Authorizer.verifyRequest, Controller.removeProduct);
	// END: Product

	// BEGIN: Bid
	router.get("/bids/:productId"	, Controller.getBidsForProductId);
	router.post("/bid"				, Authorizer.verifyRequest, Controller.addBid);
	router.delete("/bid/:id"		, Authorizer.verifyRequest, Controller.removeBid);
	// END: Bid

	return router;
}

module.exports = { create };
