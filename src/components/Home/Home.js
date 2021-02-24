import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid, Grow } from '@material-ui/core';

import { getGalleries } from '../../actions/galleries';
import Galleries from '../Galleries/Galleries';
import GalleryForm from '../GalleryForm/GalleryForm';

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch                  = useDispatch();

  useEffect(() => {
    dispatch(getGalleries());
  }, [dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={8}>
            <Galleries setCurrentId={setCurrentId} currentId={currentId}/>
          </Grid>
          <Grid item xs={12} sm={3}>
            <GalleryForm currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
