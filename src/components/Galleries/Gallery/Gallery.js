import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';

import { deleteGallery, likeGallery } from '../../../actions/galleries';
import useStyles from './styles';
import galleryDefault from '../../../images/gallery-default.png';

const Gallery = ({ gallery, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes  = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={gallery.image || galleryDefault} title={gallery.title} />
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(gallery.id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{gallery.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{gallery.description}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(likeGallery(gallery.id))}><ThumbUpAltIcon fontSize="small" /> Like {gallery.likeCount} </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deleteGallery(gallery.id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Gallery;
