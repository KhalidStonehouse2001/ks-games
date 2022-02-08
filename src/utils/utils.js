import axios from 'axios';

const gamesApi = axios.create({
	baseURL: 'https://khalid-boardgame-app.herokuapp.com/api',
});

export const getReviews = () => {
	return gamesApi
		.get('/reviews')
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
