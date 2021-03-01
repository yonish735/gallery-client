import React from 'react';
import { CircularProgress, Grid, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import { useSelector } from 'react-redux';

import Gallery from './Gallery/Gallery';
import useStyles from './styles';

const Galleries = ({ currentId, setCurrentId }) => {
  let { galleries, WIP, error } = useSelector((state) => state.galleries);
  const classes                 = useStyles();

  if (error) {
    return <Alert variant="filled" severity="error">{error}</Alert>;
  }

  return (
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {WIP && <CircularProgress className={classes.wip} />}
      {galleries.length > 0 && galleries.map((gallery) => (
        <Grid key={`g-${gallery.id}`} item xs={12} sm={6} md={4}>
          <Gallery gallery={gallery} isCurrent={gallery.id === currentId} setCurrentId={setCurrentId} />
        </Grid>
      ))}
      {galleries.length === 0 && (
        <Typography component="h3" to="/" className={classes.heading} variant="h3" align="center">You don't have any gallery yet...</Typography>
      )}
    </Grid>
  );
};

export default Galleries;
