import React, { useState } from 'react';
import { Grid, CircularProgress, TextField, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const [search, setSearch] = useState('');
  const classes = useStyles();
  const filteredPosts = posts.filter(({ title, message, creator, tags }) => [title, message, creator, ...(tags || [])].join(' ').toLowerCase().includes(search.toLowerCase()));

  return (
    !posts.length ? <CircularProgress /> : (
      <>
        <TextField label="Search memories" variant="outlined" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {filteredPosts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6} md={6}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
        {!filteredPosts.length && <Typography>No memories found.</Typography>}
      </>
    )
  );
};

export default Posts;
