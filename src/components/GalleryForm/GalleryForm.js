import React, { useEffect, useState } from 'react';
import { Button, FormControlLabel, Paper, Switch, TextField, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { createGallery, updateGallery } from '../../actions/galleries';
import useStyles from './styles';

// TODO: validaton of fields for presence and lenght
const GalleryForm = ({ currentId, setCurrentId }) => {
  const [galleryData, setGalleryData] = useState({ title: '', description: '', private: false, image: '' });
  const gallery                       = useSelector((state) => (currentId ? state.galleries.galleries.find((gallery) => gallery.id === currentId) : null));
  const dispatch                      = useDispatch();
  const classes                       = useStyles();

  useEffect(() => {
    if (gallery) {
      setGalleryData(gallery);
    }
  }, [gallery]);

  const clear = () => {
    setCurrentId(0);
    setGalleryData({ title: '', description: '', private: false, image: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      galleryData['user_id'] = 3; // TODO: user real user ID
      dispatch(createGallery(galleryData));
    } else {
      dispatch(updateGallery(currentId, galleryData));
    }
    clear();
  };

  const setPrivate = (e) => {
    setGalleryData({ ...galleryData, private: e.target.checked });
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${gallery.title}"` : 'Creating a Gallery'}</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={galleryData.title} onChange={(e) => setGalleryData({ ...galleryData, title: e.target.value })} />
        <TextField name="description" variant="outlined" label="Description" fullWidth multiline rows={4} value={galleryData.description} onChange={(e) => setGalleryData({
          ...galleryData,
          description: e.target.value
        })} />
        <FormControlLabel
          control={<Switch name="private" variant="outlined" checked={galleryData.private} onChange={setPrivate} />}
          label="Private"
        />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setGalleryData({ ...galleryData, image: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default GalleryForm;
