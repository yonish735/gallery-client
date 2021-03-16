import React from 'react';
import { AppBar, CardMedia, IconButton, Paper, Toolbar, Typography } from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './styles';

const DialogBody = ({ picture, handleClose }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.dialogAppBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.dialogTitle}>{picture.title}</Typography>
          <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Paper className={classes.popup}>
        <CardMedia className={classes.popupMedia} image={picture.image} title={picture.title} />
      </Paper>
    </>
  );
};

export default DialogBody;
