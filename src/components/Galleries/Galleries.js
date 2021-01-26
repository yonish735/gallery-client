import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Gallery from './Gallery/Gallery';
import useStyles from './styles';

const Galleries = ({ setCurrentId }) => {
  const { galleries, WIP } = useSelector((state) => state.galleries);
  const classes            = useStyles();

  if (WIP) {
    return <CircularProgress />;
  }

  return (
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {galleries.map((gallery) => (
        <Grid key={`g-${gallery.id}`} item xs={12} sm={6} md={6}>
          <Gallery gallery={gallery} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Galleries;
