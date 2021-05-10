import React, { useEffect } from 'react';
import { Paper, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams } from 'react-router-dom';

import { getPost, likePost, deletePost } from '../../actions/posts';
import useStyles from './styles';

const Post = () => {
  const { post } = useSelector((state) => state.posts);
  const { id } = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  if (!post) return null;

  return (
    <Paper style={{ padding: '10px' }}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h6">CREATOR PROFILE - coming soon!</Typography>
          <Typography variant="h6">{post.name}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
        <div className={classes.section}>
          <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
          <Typography gutterBottom variant="h5" component="h2">{post.title}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
          {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
          <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="small" /> Delete
          </Button>
          )}
        </div>
      </div>
      <div className={classes.section}>
        <Typography variant="h6">COMMENTS - coming soon!</Typography>
      </div>
      <div className={classes.section}>
        <Typography variant="h6">RELATED POSTS - coming soon!</Typography>
      </div>
      <div className={classes.section}>
        <Typography variant="h6">REALTIME CHAT - coming soon!</Typography>
      </div>
    </Paper>
  );
};

export default Post;
