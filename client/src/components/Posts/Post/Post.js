import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ShareIcon from '@material-ui/icons/Share';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ record, onDelete, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const like = (id) => {
        dispatch(likePost(id));
    }

  return (
    <Card className={classes.card}>
        <CardMedia className={classes.media} image={record.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={record.title} />
        <div className={classes.overlay}>
            <Typography variant="h6">{record.creator}</Typography>
            <Typography variant="body2">{moment(record.createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
            <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(record._id)}><MoreHorizIcon fontSize="default" /></Button>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">#newyear #countdown #2020</Typography>
          <Typography variant="body2" color="textSecondary" component="h2">test</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{record.title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{record.message}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
            <div>
                <Button size="small" color="primary" onClick={() => like(record._id)}><ThumbUpAltIcon fontSize="small" /> Like {record.likeCount} </Button>
                <Button size="small" color="primary" onClick={() => setCurrentId(record._id)}><ShareIcon fontSize="small" /> Share</Button>
            </div>
            <Button size="small" color="primary" onClick={() => onDelete(record._id)}><DeleteIcon fontSize="small" /> Delete</Button>
        </CardActions>
    </Card>
  );
}

export default Post;