const makeFetch = async (url, params) => {
	let result;
	let status;

	try {
		if (params.headers) {
			params.headers['Accept'] = 'application/json';
			params.headers['Content-Type'] = 'application/json';
		} else {
			params.headers = {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			};
		}

		const body = params.body;
		if (body) params.body = JSON.stringify(body);

		const response = await fetch(url, params);
		result = await response.json();
		status = 'success';

	} catch (error) {
		console.error(error.stack);
		status = 'failure';
	}

	return { status, result };
}

export { makeFetch };
