import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ 
    creator: '', 
    title: '', 
    message: '', 
    tags: '', 
    selectedFile: '' 
  });

  // validation errors
  const [errors, setErrors] = useState({});

  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    setErrors({});
  };

  // validation function
  const validate = () => {
    let temp = {};
    temp.creator = postData.creator ? "" : "Creator is required";
    temp.title = postData.title ? "" : "Title is required";
    temp.message = postData.message ? "" : "Message is required";
    temp.selectedFile = postData.selectedFile ? "" : "Image is required";

    setErrors(temp);

    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return; // ❌ stop submit if invalid

    if (currentId === 0) {
      dispatch(createPost(postData));
    } else {
      dispatch(updatePost(currentId, postData));
    }

    clear();
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">
          {currentId ? `Editing "${post.title}"` : 'Creating a Memory'}
        </Typography>

        <TextField 
          name="creator" 
          variant="outlined" 
          label="Creator" 
          fullWidth 
          value={postData.creator} 
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
          error={!!errors.creator}
          helperText={errors.creator}
        />

        <TextField 
          name="title" 
          variant="outlined" 
          label="Title" 
          fullWidth 
          value={postData.title} 
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          error={!!errors.title}
          helperText={errors.title}
        />

        <TextField 
          name="message" 
          variant="outlined" 
          label="Message" 
          fullWidth 
          multiline 
          rows={4} 
          value={postData.message} 
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
          error={!!errors.message}
          helperText={errors.message}
        />

        <TextField 
          name="tags" 
          variant="outlined" 
          label="Tags (comma separated)" 
          fullWidth 
          value={postData.tags} 
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
        />

        <div className={classes.fileInput}>
          <FileBase 
            type="file" 
            multiple={false} 
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} 
          />
          {errors.selectedFile && (
            <Typography style={{ color: "red", fontSize: "12px" }}>
              {errors.selectedFile}
            </Typography>
          )}
        </div>

        <Button 
          className={classes.buttonSubmit} 
          variant="contained" 
          color="primary" 
          size="large" 
          type="submit" 
          fullWidth
        >
          Submit
        </Button>

        <Button 
          variant="contained" 
          color="secondary" 
          size="small" 
          onClick={clear} 
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
