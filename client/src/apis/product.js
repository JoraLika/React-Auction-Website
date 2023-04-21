import { makeFetch } from "./fetch";
const API_URL = process.env.REACT_APP_API;

const product = async (productData) => {
	const params = {
		body: productData,
		method: 'POST' 
	};
	const url = API_URL + '/product';
	const response = await makeFetch(url, params);

	if (response.status === 'failure') {
		response.result = 'Problem registering new user!';
	}
	
	return response;
}

export { product };
