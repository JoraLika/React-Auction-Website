import { makeFetch } from "./fetch";
const API_URL = process.env.REACT_APP_API;

const register = async (userData) => {
	const params = {
		body: userData,
		method: 'POST'
	};
	const url = API_URL + '/user';
	const response = await makeFetch(url, params);

	if (response.status === 'failure') {
		response.result = 'Problem registering new user!';
	}
	
	return response;
}

const login = async (username, password) => {
	const params = {
		method: 'GET'
	};
	const queryParams = `?=username=${username}&password=${password}`;
	const url = API_URL + '/user' + queryParams;
	const response = await makeFetch(url, params);

	if (response.status === 'failure') {
		response.result = `There was a problem logging in!`;
	}
	
	return response;
}

export { register, login };
