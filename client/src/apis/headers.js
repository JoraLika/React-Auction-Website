const createPostHeaders = (username, password) => {
	return new Headers({
		username,
		password,
	});
}

export { createPostHeaders };
