import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import ButterToast from "butter-toast";
import FileBase from 'react-file-base64';

import Toast from '../Toast/Toast';
import useStyles from './styles';
import { createPost, updatePost } from '../../actions/messages';

const PostMessageForm = ({ currentId }) => {
    const [creator, setCreator] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [selectedFile, setSelectedFile] = useState({});
    
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createPost({ title, message, creator, selectedFile }));
            ButterToast.raise({ content: <Toast action='create' /> })
        } else {
            dispatch(updatePost(currentId, { title, message }));
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

export default PostMessageForm;