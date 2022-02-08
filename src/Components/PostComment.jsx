import React, { useState } from 'react';
import {TextField, Button} from '@mui/material'
import {useParams, useNavigate} from 'react-router-dom'
import { postComment } from '../utils/utils';
function PostComment() {
    const [newComment, setNewComment] = useState({
        username: '',
        body: ''
    })
    const navigate = useNavigate()
    const {review_id} = useParams()
    const handleChange = e => {
        setNewComment((currComment) => {
            const newCommentItem = {...currComment}
            newCommentItem[e.target.name] = e.target.value
            return newCommentItem

        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        postComment(newComment, review_id).then((res) => {
            console.log(res)
        })
        setNewComment({
            username: '',
            body: ''
        })
        // navigate(`${review_id}/comments`)
    }



  return <div>
      <form className="form-div" onSubmit={handleSubmit}>
      <h3 className="post-comment-title">Add your Comment!</h3>
          <label className="user-label">Username</label>
          <br />
          <div className="input-div">
          <input className="username-input" onChange={handleChange} value={newComment.username} type="text" name="username" />
          <br />
          <label className="body-label" >Comment</label>
          <br />
          <input className="body-input" onChange={handleChange} value={newComment.body} type="text" name="body"  />
          </div>
          <br />
          <Button variant='outlined' type='submit'>Submit</Button>
      </form>
     

  </div>;
}

export default PostComment;
