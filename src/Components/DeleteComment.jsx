import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { deleteCommentById } from '../utils/utils';
function DeleteComment({ comment_id }) {
	const deleteComments = () => {
		deleteCommentById(comment_id).catch((err) => {
			console.log(err);
		});
	};
	return (
		<Button onClick={() => deleteComments()} color='error' variant='contained'>
			Delete
		</Button>
	);
}

export default DeleteComment;
