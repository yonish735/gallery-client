import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Link, Tooltip, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import BlurOff from '@material-ui/icons/BlurOff';
import { useDispatch } from 'react-redux';

import { likeGallery } from '../../../actions/galleries';
import useStyles from './styles';
import galleryDefault from '../../../images/gallery-default.png';

const Gallery = ({ gallery, isCurrent, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes  = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={gallery.image || galleryDefault} title={gallery.title} />
      {gallery.private &&
      <div className={classes.overlay}>
        <Tooltip title="Private">
          <Button size="small" fontSize="small">
            <BlurOff className={classes.private} color="secondary" />
          </Button>
        </Tooltip>
      </div>
      }
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{gallery.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{gallery.description}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(likeGallery(gallery.id))}><ThumbUpAltIcon fontSize="small" /> Give Me! </Button>
      </CardActions>
    </Card>
  );
};

export default Gallery;
