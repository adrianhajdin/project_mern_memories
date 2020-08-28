import React, { useEffect, useState } from 'react';
import { Grid, Paper, CircularProgress, Container, Grow } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import Form from '../Form/Form';
import Post from './Post/Post';
import useStyles from './styles';
import { getPosts } from '../../actions/posts';

const Posts = () => {
  const [currentId, setCurrentId] = useState(0);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container className={classes.mainContainer}>
        <Grid style={{ justifyContent: 'space-between' }} container alignItems="stretch" spacing={3}>
          <Grid style={{ marginTop: '24px' }} item xs={7}>
            {!posts.length ? <CircularProgress /> : (
              <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                  <Grid key={post._id} item xs={12} sm={6} md={6}>
                    <Post post={post} setCurrentId={setCurrentId} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Posts;
