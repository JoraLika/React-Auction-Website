import { makeFetch } from "./fetch";
import { createPostHeaders } from "./headers";
const API_URL = process.env.REACT_APP_API;

const getProducts = async () => {
	const params = {
		method: 'GET'
	};
	const url = API_URL + '/products';
	const response = await makeFetch(url, params);

	if (response.status === 'failure') {
		response.result = 'The product could not be posted due to an issue';
	}
	
	return response;
}

const addProduct = async (productData, username, password) => {
	const params = {
		body: productData,
		method: 'POST',
		headers: createPostHeaders(username, password)
	};
	const url = API_URL + '/product';
	const response = await makeFetch(url, params);

	if (response.status === 'failure') {
		response.result = 'The product could not be posted due to an issue';
	}
	
	return response;
}

export { getProducts, addProduct };
