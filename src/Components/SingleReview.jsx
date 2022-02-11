import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSingleReview } from '../utils/utils';
import LikeReview from './LikeReview';
import { Button } from '@mui/material';
import {
	CCard,
	CCardImage,
	CCardBody,
	CCardTitle,
	CCardText,
	CButton,
} from '@coreui/react';
function SingleReview() {
	const [review, setReview] = useState([]);
	const { review_id } = useParams();
	useEffect(() => {
		getSingleReview(review_id).then((res) => {
			setReview(res);
		});
	}, [review_id]);

	return (
		<div>
			<ul>
				{review.map((review) => {
					return (
						<CCard className='single-review-card'>
							<CCardImage
								className='single-review-img'
								orientation='top'
								src={review.review_img_url}
							/>
							<CCardBody className='review-card-body'>
								<CCardTitle>{review.title}</CCardTitle>
								<CCardText className='review-body-title'>
									{'Review : '}
								</CCardText>
								<CCardText className='review-body'>
									{review.review_body}
								</CCardText>
								<CCardText className='review-body-title'>
									{'Designer : '}
								</CCardText>
								<CCardText>{review.designer}</CCardText>
								<CCardText className='review-body-title'>
									{'Owner : '}
								</CCardText>
								<CCardText>{review.owner}</CCardText>
								<CCardText className='review-votes-title'>
									{'Votes📉 : '}
									<LikeReview votes={review.votes} review_id={review_id} />
								</CCardText>
								<CCardText className='review-body-title'>
									{'Category📚 : '}
								</CCardText>
								<CCardText>{review.category}</CCardText>
								<CCardText className='review-body-title'>
									{'Comments🖋 : '}
									<CCardText>{review.comment_count}</CCardText>
								</CCardText>
								<Link
									className='comment-link'
									to={`/reviews/${review.review_id}/comments`}
								>
									<Button variant='outlined'>Load Comments</Button>
								</Link>
							</CCardBody>
						</CCard>
					);
				})}
			</ul>
		</div>
	);
}

export default SingleReview;
