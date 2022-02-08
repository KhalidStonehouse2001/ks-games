import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom'
import { getSingleReview } from '../utils/utils';
import {Button} from '@mui/material'
function SingleReview() {
    const [review, setReview] = useState([])
    const {review_id} = useParams()
    const [votes, setVotes] = useState(review.votes)
    useEffect(() => {
getSingleReview(review_id).then((res) => {
    setReview(res)
})


}, [review_id])
// const incVotes = () => {
//     return review[0].votes += 1
// }
  return (
    <div>
        <ul>
       
      {review.map((review) => {
          return <li className='review-list'>
              <h3 className='review-title'>{review.title}</h3>
              <div className='underline'></div>
              <div className='owners-div'>
              <p className='review-p-header'>{'Designer: '}</p>
              <p className='designer'>{review.designer}</p>
              <p className='review-p-header'>{'Owner: '}</p>
              <p className='owner'>{review.owner}</p>
              </div>
              <img src={review.review_img_url} alt={review.title} />
              <p className='review-p-header'>{'Review: '}</p>
              <p className='review-body'>{review.review_body}</p>
              <div className='bottom-container'>
              <p className='review-p-header'>{'Votes:'}</p>
              <Button  variant="outlined">{review.votes}</Button>
              <p className='review-p-header'>{'Category: '}</p>
              <p className='cat'>{review.category}</p>
              </div>
              <Link className='comment-link'  to={`/reviews/${review.review_id}/comments`}>
              <Button variant="outlined">Load Comments</Button>
              </Link>
          </li>
      })}
       </ul>

      </div>
      )
}

export default SingleReview;
