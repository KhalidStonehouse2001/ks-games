import axios from 'axios';

const gamesApi = axios.create({
	baseURL: 'https://khalid-boardgame-app.herokuapp.com/api',
});

export const getReviews = (category, sort_by, order) => {
	let path = `/reviews?limit=100`;
	if (category) path += `&category=${category}`;

	if (sort_by) path += `&sort_by=${sort_by}`;
	if (order) path += `&order=${order}`;
	return gamesApi
		.get(path)
		.then(({ data }) => {
			return data.reviews;
		})
		.catch((err) => {
			console.log(err);
		});
};

export const getCategories = () => {
	return gamesApi
		.get('/categories')
		.then(({ data }) => {
			return data.categories;
		})
		.catch((err) => {
			console.log(err);
		});
};

export const getSingleReview = (id) => {
	return gamesApi
		.get(`/reviews/${id}`)
		.then(({ data }) => {
			return data.review;
		})
		.catch((err) => {
			console.log(err);
		});
};

export const getSingleComment = (id) => {
	return gamesApi
		.get(`/reviews/${id}/comments`)
		.then(({ data }) => {
			return data.comments;
		})
		.catch((err) => {
			console.log(err);
		});
};

export const postComment = (comment, id) => {
	console.log(id, comment);
	return gamesApi
		.post(`/reviews/${id}/comments`, comment)
		.then(({ data }) => {
			return data.comment;
		})
		.catch((err) => {
			console.log(err.response);
		});
};

export const getUser = (username) => {
	return gamesApi
		.get(`users/${username}`)
		.then(({ data }) => {
			return data.user;
		})
		.catch((err) => {
			console.log(err);
		});
};

export const patchReviewById = (id) => {
	return gamesApi.patch(`reviews/${id}`, { inc_votes: 1 }).then(({ data }) => {
		return data.review;
	});
};
