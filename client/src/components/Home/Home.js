import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, AppBar, TextField, Button, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { getPosts, getPostsBySearch } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Pagination from '../Pagination';
import useStyles from './styles';

const Home = ({ match }) => {
  const { page, searchQuery } = match.params;
  const classes = useStyles();

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const history = useHistory();

  useEffect(() => {
    dispatch(getPosts(page));
  }, [currentId, dispatch, page]);

  const searchPost = () => {
    if (search.trim()) {
      dispatch(getPostsBySearch(search));
      history.push(`/search/${search}`);
    } else {
      history.push('/');
    }
  };

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <AppBar className={classes.appBarSearch} position="static" color="inherit">
              <TextField name="search" variant="outlined" label="Search Memories" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
              <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper className={classes.pagination}>
              {!searchQuery && <Pagination page={page} />}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
