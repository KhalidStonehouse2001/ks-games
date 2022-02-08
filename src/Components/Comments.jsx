import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getSingleComment, getSingleReview } from '../utils/utils';
import {Button } from '@mui/material'
import { Link } from 'react-router-dom';
function Comments() {
    const [comments, setComments] = useState([])
    const {review_id} = useParams()
    useEffect(() => {
        getSingleComment(review_id).then((res) => {
            setComments(res)
        })
    }, [review_id])
  return comments.length === 0 ? <p className='loading'>No Comments </p> 
  : (<div className='comments-container'>
      <h1>Comments</h1>
      <ul>
      {comments.map((comment) => {
         return (
             <li className='comments-list'>
                 <h5>User: </h5>
                 <p>{comment.author}</p>
                 <h5>Comment: </h5>
                 <p>{comment.body}</p>
                 <h5>Votes: </h5>
                 <p>{comment.votes}</p>
             </li>
         )
        })}
        <Link to='/newcomment'>
        <Button  className='post-comment-btn' variant='outlined'>Post a Comment</Button>
        </Link>
        </ul>
  </div>)
}

export default Comments;
