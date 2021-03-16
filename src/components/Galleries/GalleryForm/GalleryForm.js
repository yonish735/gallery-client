import React, { useEffect, useState } from 'react';
import { Button, FormControlLabel, Paper, Switch, TextField, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { createGallery, updateGallery } from '../../actions/galleries';
import useStyles from './styles';
import FileBase from '../FileBase/FileBase';

// TODO: validaton of fields for presence and lenght
const GalleryForm = ({ currentId, setCurrentId }) => {
  const [galleryData, setGalleryData] = useState({ title: '', description: '', private: false, image: '' });
  const [fileName, setFileName] = useState('');

  const userId                        = useSelector((state) => state.auth?.user?.id);
  const gallery                       = useSelector((state) => (currentId ? state.galleries.galleries.find((gallery) => gallery.id === currentId) : null));
  const dispatch                      = useDispatch();
  const classes                       = useStyles();

  useEffect(() => {
    if (gallery) {
      setGalleryData(gallery);
      setFileName(gallery.filename || "");
    }
  }, [gallery]);

  const clear = () => {
    setCurrentId(0);
    setGalleryData({ title: '', description: '', private: false, image: '' });
    setFileName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      galleryData['user_id'] = userId;
      dispatch(createGallery(galleryData, fileName));
    } else {
      dispatch(updateGallery(currentId, galleryData, fileName));
    }
    clear();
  };

  const setPrivate = (e) => {
    setGalleryData({ ...galleryData, private: e.target.checked });
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing a Gallery` : 'Creating a Gallery'}</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={galleryData.title} onChange={(e) => setGalleryData({ ...galleryData, title: e.target.value })} />
        <TextField name="description" variant="outlined" label="Description" fullWidth multiline rows={4} value={galleryData.description} onChange={(e) => setGalleryData({
          ...galleryData,
          description: e.target.value
        })} />
        <FormControlLabel
          className={classes.switch}
          control={<Switch name="private" variant="outlined" checked={galleryData.private} onChange={setPrivate} />}
          label="Private"
        />
        <FileBase onDone={({ base64 }) => setGalleryData({ ...galleryData, image: base64 })} fileName={fileName} setFileName={setFileName} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button className={classes.buttonClear} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default GalleryForm;
