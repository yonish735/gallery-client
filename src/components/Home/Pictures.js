import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Fab, Grid, Grow } from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons';
import { useHistory, useParams } from 'react-router-dom';

import { getGalleries } from '../../actions/galleries';
import ScrollTop from '../ScrollTop/ScrollTop';
import Pictures from '../Pictures/Pictures';
import PictureForm from '../Pictures/PictureForm/PictureForm';
import { getPictures } from '../../actions/pictures';

const PicturesHome = () => {
  const [pictureId, setPictureId] = useState(0);
  let { galleryId }               = useParams();
  const user                      = useSelector((state) => state.auth.user);
  const { galleries }             = useSelector((state) => state.galleries);
  const history                   = useHistory();
  const dispatch                  = useDispatch();

  galleryId     = parseInt(galleryId);
  const gallery = galleries.find(g => g.id === galleryId);

  useEffect(() => {
    if (user && galleries.length === 0) {
      dispatch(getGalleries(user.id));
    }
  }, [dispatch, galleries, user]);

  useEffect(() => {
    if (user && galleries.length !== 0) {
      dispatch(getPictures(galleryId));
    }
  }, [dispatch, galleryId, galleries, user]);

  if (user === null) {
    history.push('/auth');
    return <></>;
  }

  if (galleries.length === 0) {
    return <></>;
  }

  return (
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={8}>
            <div id="back-to-top-anchor" />
            <Pictures galleryId={galleryId} galleryTitle={gallery.title} currentId={pictureId} setCurrentId={setPictureId} />
            <ScrollTop>
              <Fab color="secondary" size="small" aria-label="scroll back to top">
                <KeyboardArrowUp />
              </Fab>
            </ScrollTop>
          </Grid>
          <Grid item xs={12} sm={3}>
            <PictureForm galleryId={galleryId} currentId={pictureId} setCurrentId={setPictureId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default PicturesHome;
