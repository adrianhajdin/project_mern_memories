import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { commentPost } from '../../actions/posts';
import { Paper, Typography, TextField, Button, Box } from '@material-ui/core';

const Comment = ({ post }) => {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const handleClick = async () => {
    if (comment.trim()) {
      await dispatch(commentPost(comment, post._id));
      setComment('');
    }
  };

  return (
    <Paper elevation={2} style={{ padding: 16, marginTop: 16 }}>
      <Typography variant="h6" gutterBottom>Comments</Typography>
      <Box mb={2}>
        {post.comments.length === 0 ? (
          <Typography variant="body2" color="textSecondary">No comments yet.</Typography>
        ) : (
          post.comments.map((c, i) => (
            <Typography key={i} variant="body2" style={{ marginBottom: 4 }}>
              {c}
            </Typography>
          ))
        )}
      </Box>
      <Box display="flex" alignItems="center">
        <TextField
          variant="outlined"
          size="small"
          label="Add a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{ flex: 1, marginRight: 8 }}
        />
        <Button variant="contained" color="primary" onClick={handleClick} disabled={!comment.trim()}>
          Comment
        </Button>
      </Box>
    </Paper>
  );
};

export default Comment;