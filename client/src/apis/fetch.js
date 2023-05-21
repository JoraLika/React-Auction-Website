const makeFetch = async (url, params) => {
	let result;
	let status;

	try {
		const body = params.body;
		if (body) {
			params.body = JSON.stringify(body);
		}

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
