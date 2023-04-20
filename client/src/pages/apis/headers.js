const createPostHeaders = (email, password) => {
	return new Headers({
		email,
		password,
	});
}

export { createPostHeaders };
