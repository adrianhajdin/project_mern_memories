import React, { useEffect, useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';

import Form from "../Form/Form";
import Post from './Post/Post';
import useStyles from './styles';
import { getPosts, deletePost } from '../../actions/messages';
import CustomizedSnackbars from '../Toast/Toast'
const Posts = () => {
    const classes = useStyles();
    const messages = useSelector((state) => state.messages);
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(0)
    const [action, setAction] = useState('')
  
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    const onDelete = id => {
        dispatch(deletePost(id));
        setAction('delete')  
    }

    return (
        <div className={classes.mainContainer}>
            <Paper className={classes.paper}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Paper>
            <CustomizedSnackbars action={action} />
            {!messages.length ? 'Loading ' : (
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {messages.map((record, index) => (
                        <Grid item xs={12} sm={6}>
                            <Post record={record} key={index} onDelete={onDelete} setCurrentId={setCurrentId} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    );
}

export default Posts;