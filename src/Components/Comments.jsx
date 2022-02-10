import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getSingleComment, getSingleReview } from '../utils/utils';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteComment from './DeleteComment';
import {
	CCard,
	CCardImage,
	CCardBody,
	CCardTitle,
	CCardText,
	CButton,
} from '@coreui/react';
function Comments() {
	const [comments, setComments] = useState([]);
	const { review_id } = useParams();
	useEffect(() => {
		getSingleComment(review_id).then((res) => {
			setComments(res);
		});
	}, [review_id]);
	return comments.length === 0 ? (
		<div>
			{' '}
			<p className='loading'>No Comments </p>
			<Link className='comment-link' to={`reviews/${review_id}/newcomments`}>
				<Button className='post-comment-btn' variant='outlined'>
					Post a Comment
				</Button>
			</Link>{' '}
		</div>
	) : (
		<div className='comments-container'>
			<h1>Comments</h1>
			<ul>
				{comments.map((comment) => {
					return (
						<div className='comment-card'>
							<CCard color='secondary' style={{ width: '40rem' }}>
								{/* <CCardImage orientation='top' src={review.review_img_url} /> */}
								<CCardBody className='review-card-body'>
									{/* <CCardTitle>{review.title}</CCardTitle> */}
									<CCardText>
										{'User: '}
										{comment.author}
									</CCardText>
									<CCardText>
										{'Comment: '}
										{comment.body}
									</CCardText>
									<CCardText>
										{'Votes: '}
										{comment.votes}
									</CCardText>

									<Button color='error' variant='contained'>
										Danger
									</Button>
								</CCardBody>
							</CCard>
						</div>
					);
				})}
				<Link className='comment-link' to={`reviews/${review_id}/newcomments`}>
					<Button className='post-comment-btn' variant='outlined'>
						Post a Comment
					</Button>
				</Link>
			</ul>
		</div>
	);
}

export default Comments;
