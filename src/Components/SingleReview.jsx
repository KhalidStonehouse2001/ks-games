import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { getSingleReview } from '../utils/utils';

function SingleReview() {
    const [review, setReview] = useState([])
    const {review_id} = useParams()

    useEffect(() => {
getSingleReview(review_id).then((res) => {
    setReview(res)
    console.log(review)
})

    }, [review_id])
  return (
    <div>
        <ul>

       
      {review.map((review) => {
          return <li className='review-list'>
              <h3>{review.title}</h3>
              <p className='review-p-header'>{'Designer: '}</p>
              <p>{review.designer}</p>
              <img src={review.review_img_url} alt={review.title} />
              <p className='review-p-header'>{'Review: '}</p>
              <p className='review-body'>{review.review_body}</p>
              <p className='review-p-header'>{'Owner: '}</p>
              <p>{review.owner}</p>
              <p className='review-p-header'>{'Votes:'}</p>
              <p>{review.votes}</p>
              <p className='review-p-header'>{'Category: '}</p>
              <p>{review.category}</p>
              <p className='review-p-header'>{"Comments: "}</p>
              <p>{review.comment_count}</p>
          </li>
      })}
       </ul>

      </div>
      )
}

export default SingleReview;
