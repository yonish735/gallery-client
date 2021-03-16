import React from 'react';
import { Breadcrumbs, CircularProgress, Grid, Link, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Alert from '@material-ui/lab/Alert';

import useStyles from './styles';
import Gallery from './Gallery/Gallery';

const Search = () => {
  let { search, WIP, error } = useSelector((state) => state.search);
  const classes              = useStyles();

  if (error) {
    return <Alert variant="filled" severity="error">{error}</Alert>;
  }

  return (
    <>
      <Breadcrumbs separator="›" className={classes.breadcrumbs}>
        <Link color="inherit" href="/">My Galleries</Link>
        <Typography color="textPrimary">Search Results</Typography>
      </Breadcrumbs>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {WIP && <CircularProgress className={classes.wip} />}
        {!WIP && search && search.length === 0 && (
          <Typography component="h3" to="/" className={classes.heading} variant="h3" align="center">Nothing found.</Typography>
        )}
        {search && search.length > 0 && search.map((gallery) => (
          <Grid key={`g-${gallery.id}`} item xs={12} sm={6} md={3}>
            <Gallery gallery={gallery} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Search;
