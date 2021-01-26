import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Galleries from './components/Galleries/Galleries';
import GalleryForm from './components/GalleryForm/GalleryForm';
import { getGalleries } from './actions/galleries';
import useStyles from './styles';
import gallery from './images/gallery.svg';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getGalleries());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">My Galleries</Typography>
        <img className={classes.image} src={gallery} alt="gallery icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Galleries setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <GalleryForm currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
