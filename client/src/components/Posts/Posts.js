import React, { useEffect, useState } from "react";
import { Grid, Paper, CircularProgress, Container } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';

import Form from "../Form/Form";
import Post from './Post/Post';
import useStyles from './styles';
import { getPosts, deletePost } from '../../actions/posts';
import CustomizedSnackbars from '../Toast/Toast';

const Posts = () => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(0)
    const [action, setAction] = useState('')
  
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    const onDelete = id => {
        dispatch(deletePost(id));
        setAction('delete')  
    }

    return (
        <Container className={classes.mainContainer}>
            <CustomizedSnackbars action={action} />
            <Grid style={{justifyContent: 'space-between'}} container>
        <Grid item xs={7}>

            {!posts.length ?<CircularProgress /> : (
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {posts.map((record, index) => (
                        <Grid key={index} item xs={12} sm={6} md={6}>
                            <Post record={record} key={index} onDelete={onDelete} setCurrentId={setCurrentId} />
                        </Grid>
                    ))}
                </Grid>
            )}
            </Grid>
        <Grid  item xs={4}>
            <Paper className={classes.paper}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Paper>
            
        </Grid>
            </Grid>
        </Container>
    );
}

export default Posts;