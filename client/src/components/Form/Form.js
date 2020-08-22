import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import ButterToast from "butter-toast";
import FileBase from 'react-file-base64';

import Toast from '../Toast/Toast';
import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId }) => {
    const [creator, setCreator] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [selectedFile, setSelectedFile] = useState({});
    const post = useSelector((state) => currentId ? state.posts.find(message => message._id === currentId) : null);
        
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if(post) {
            setCreator(post.creator);
            setTitle(post.title);
            setMessage(post.message);
            setSelectedFile(post.selectedFile);
        }        
}, [post]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createPost({ title, message, creator, selectedFile }));
            ButterToast.raise({ content: <Toast action='create' /> })
        } else {
            dispatch(updatePost(currentId, { title, message, creator, selectedFile, _id: currentId }));
            ButterToast.raise({ content: <Toast action='update' /> })
        }
    }
    
    return (
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <TextField name="creator" variant="outlined" label="Creator" fullWidth value={creator} onChange={(e) => setCreator(e.target.value)} />
            <TextField name="title" variant="outlined" label="Title" fullWidth value={title} onChange={(e) => setTitle(e.target.value)} />
            <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
            <FileBase type="file" multiple={false} onDone={({ base64 }) => setSelectedFile(base64)} />
            <Button variant="contained" color="primary" size="large" type="submit" className={classes.postBtn} >Submit</Button>
        </form>
    );
}

export default Form;