import React, { useState } from 'react'
import { patchReviewById } from '../utils/utils'
import {Button} from '@mui/material'

function LikeReview({votes, review_id}) {
    const [likeChange, setLikeChange] = useState(0)

    const reviewLike = () => {
        patchReviewById(review_id).then(() => {
            setLikeChange((currLikes) => currLikes + 1)
        })
        .catch((err) => {
            console.log(err)
            setLikeChange((currLikes) => currLikes -1)
        })
    }
  return (
    <Button onClick={() => reviewLike()}  variant="outlined">{votes}</Button>

  )
}

export default LikeReview