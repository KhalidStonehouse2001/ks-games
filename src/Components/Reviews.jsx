import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getReviews } from '../utils/utils';
import Filter from './Filter';
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
			<form>
				<div className='select'>
					<select
						value={sort_by}
						onChange={(e) => setSort_By(e.target.value)}
						className='select'
						name='reviews'
					>
						<option value='' disabled defaultValue>
							Sort by:
						</option>
						<option value='votes'>Votes</option>
						<option value='comment_count'>Comments</option>
					</select>
					<select
						className='select'
						value={order_By}
						onChange={(e) => setOrder_By(e.target.value)}
					>
						<option value='' disabled defaultValue>
							Order By
						</option>
						<option value='asc'>Ascending</option>
						<option value='desc'>Descending</option>
					</select>
				</div>
			</form>
			<ul>
				{reviews.map((review) => {
					return (
						<div className='review-div-card'>
							<CCard className='review-card' style={{ width: '40rem' }}>
								<CCardImage orientation='top' src={review.review_img_url} />
								<CCardBody className='review-card-body'>
									<CCardTitle>{review.title}</CCardTitle>
									<CCardText>
										{'Votes: '}
										{review.votes}
									</CCardText>
									<CCardText>
										{'Category: '}
										{review.category}
									</CCardText>
									<CCardText>
										{'Comments: '}
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
