import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getReviews } from '../utils/utils';


function Reviews() {
  const [reviews, setReviews] =useState([])
  const [isLoading, setIsLoading] = useState(true)
  const params = useParams()
  useEffect(() => {
  getReviews().then((res) => {
    setReviews(res)
    setIsLoading(false)
  })
  }, [])
  return isLoading ? <p className='loading'>Loading...</p> : (
    <div className='reviews_card'>
    <h1>Reviews</h1>
    <ul>
    {reviews.map((review) => {
      return (
            <Link className='list-link' to={`/reviews/${review.review_id}`}>
        <li key={review.review_id} className='reviews-list'>
            <h5 className='review-title'>{review.title}</h5>
            <img className='review-img' src={review.review_img_url} alt={review.title} />
          <p className='comments-p-tag'>{review.comment_count}{' Comments'}</p>
          <p className='votes-p-tag'>{review.votes}{' Votes'}</p>
          </li>
          </Link>
            )
          })}
          </ul>
    </div>
  )
}

export default Reviews;
