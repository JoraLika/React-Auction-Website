const createPostHeaders = (username, password) => {
	return new Headers({
		username,
		password,
		"Content-Type": "application/json"
	});
}

export { createPostHeaders };
