import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Link, Paper, Tooltip, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import BlurOff from '@material-ui/icons/BlurOff';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';

import { deleteGallery, likeGallery } from '../../../actions/galleries';
import useStyles from './styles';
import galleryDefault from '../../../images/gallery-default.png';

const Gallery = ({ gallery, isCurrent, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes  = useStyles();

  return (
    <Card className={clsx(classes.card, {
      [classes.selected]: isCurrent,
    })}>
      <Link onClick={() => alert('!')} to="">
        <CardMedia className={classes.media} image={gallery.image || galleryDefault} title={gallery.title} />
      </Link>
      {gallery.private &&
      <div className={classes.overlay}>
        <Tooltip title="Private">
          <Button size="small" fontSize="small">
            <BlurOff className={classes.private} color="secondary" />
          </Button>
        </Tooltip>
      </div>
      }
      <div className={classes.overlay2}>
        <Tooltip title="Edit">
          <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(gallery.id)}><EditIcon fontSize="small" /></Button>
        </Tooltip>
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
