import React from 'react';
import { Breadcrumbs, CircularProgress, Grid, Link, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import { useSelector } from 'react-redux';

import Picture from './Picture/Picture';
import useStyles from './styles';

const Pictures = ({ currentId, setCurrentId, galleryId, galleryTitle }) => {
  let { pictures, WIP, error } = useSelector((state) => state.pictures);
  const classes                = useStyles();

  if (error) {
    return <Alert variant="filled" severity="error">{error}</Alert>;
  }

  return (
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {WIP && <CircularProgress className={classes.wip} />}
      <Breadcrumbs separator="›">
        <Link color="inherit" href="/">My Galleries</Link>
        <Typography color="textPrimary">Pictures</Typography>
      </Breadcrumbs>
      <Typography component="h2" to="/" className={classes.heading} variant="h3" align="center">{galleryTitle}</Typography>
      {pictures.length > 0 && pictures.map((picture) => (
        <Grid key={`p-${picture.id}`} item xs={12} sm={6} md={4}>
          <Picture picture={picture} isCurrent={picture.id === currentId} setCurrentId={setCurrentId} />
        </Grid>
      ))}
      {!WIP && pictures.length === 0 && (
        <Typography component="h5" to="/" className={classes.heading} variant="h5" align="center">You don't have pictures yet...</Typography>
      )}
    </Grid>
  );
};

export default Pictures;
