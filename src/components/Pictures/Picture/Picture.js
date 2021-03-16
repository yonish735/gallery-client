import React from 'react';
import { AppBar, Button, Card, CardActions, CardContent, CardMedia, Dialog, IconButton, Link, Paper, Slide, Toolbar, Tooltip, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';

import { deletePicture } from '../../../actions/pictures';
import useStyles from './styles';
import galleryDefault from '../../../images/gallery-default.png';
import DialogBody from './DialogBody';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Picture = ({ picture, isCurrent, setCurrentId }) => {
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const classes  = useStyles();

  const handleOpen  = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card className={clsx(classes.card, {
      [classes.selected]: isCurrent,
    })}>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogBody picture={picture} handleClose={handleClose} />
      </Dialog>
      {
        picture.image && <Link component="button" to="" onClick={handleOpen}>
          <CardMedia className={classes.media} image={picture.image || galleryDefault} title={picture.title} />
        </Link>
      }
      <div className={classes.overlay2}>
        <Tooltip title="Edit">
          <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(picture.id)}><EditIcon fontSize="small" /></Button>
        </Tooltip>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{picture.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{picture.description}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={isCurrent} onClick={() => dispatch(deletePicture(picture.id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Picture;
