import React, { useEffect, useState } from 'react';
import { patchReviewById } from '../utils/utils';
import { Button } from '@mui/material';

function LikeReview({ votes, review_id }) {
	const [likeChange, setLikeChange] = useState(votes);
	const reviewLike = () => {
		patchReviewById(review_id)
			.then(() => {
				setLikeChange((currLikes) => currLikes + 1);
			})
			.catch((err) => {
				console.log(err);
				setLikeChange((currLikes) => currLikes - 1);
			});
	};
	return (
		<div>
			<br />
			<Button
				className='votes-btn'
				onClick={() => reviewLike()}
				variant='outlined'
			>
				{likeChange}
			</Button>
		</div>
	);
}

export default LikeReview;
