import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getReviews } from '../utils/utils';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import {
	CCard,
	CCardImage,
	CCardBody,
	CCardTitle,
	CCardText,
	CButton,
} from '@coreui/react';

function Reviews() {
	const [reviews, setReviews] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [sort_by, setSort_By] = useState('');
	const [order_By, setOrder_By] = useState('');
	const { search } = useLocation();
	const categoryNameSearch = search.slice(10, search.length);
	useEffect(() => {
		getReviews(categoryNameSearch, sort_by, order_By).then((res) => {
			setReviews(res);
			setIsLoading(false);
		});
	}, [categoryNameSearch, sort_by, order_By]);
	return isLoading ? (
		<p className='loading'>Loading...</p>
	) : (
		<div className='reviews_card'>
			<h1>Reviews</h1>
			<div className='underline-review'></div>
			<FormControl fullWidth>
				<InputLabel className='inputlabel-one' id='demo-simple-select-label'>
					Sort By
				</InputLabel>
				<Select
					className='first-form'
					value={sort_by}
					onChange={(e) => setSort_By(e.target.value)}
					name='reviews'
				>
					<MenuItem value='votes'>Votes</MenuItem>
					<MenuItem value='comment_count'>Comments</MenuItem>
				</Select>
				<FormControl fullWidth>
					<InputLabel className='inputlabel' id='demo-simple-select-label'>
						Order By
					</InputLabel>
					<Select
						className='second-form'
						value={order_By}
						onChange={(e) => setOrder_By(e.target.value)}
						name='reviews'
					>
						<MenuItem value='asc'>Ascending</MenuItem>
						<MenuItem value='desc'>Descending</MenuItem>
					</Select>
				</FormControl>
			</FormControl>
			<ul>
				{reviews.map((review) => {
					return (
						<div key={review.review_id} className='review-div-card'>
							<CCard className='review-card'>
								<CCardImage
									className='review-img'
									orientation='top'
									src={review.review_img_url}
								/>
								<CCardBody className='review-card-body'>
									<CCardTitle>{review.title}</CCardTitle>
									<CCardText>
										{'Votes📉 : '}
										{review.votes}
									</CCardText>
									<CCardText>
										{'Category📚 : '}
										{review.category}
									</CCardText>
									<CCardText>
										{'Comments🖋 : '}
										{review.comment_count}
									</CCardText>
									<Link
										key={review.review_id}
										className='list-link'
										to={`/reviews/${review.review_id}`}
									>
										<CButton>Click for more...</CButton>
									</Link>
								</CCardBody>
							</CCard>
						</div>
					);
				})}
			</ul>
		</div>
	);
}

export default Reviews;
