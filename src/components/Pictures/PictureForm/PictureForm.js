import React, { useEffect, useState } from 'react';
import { Button, Paper, TextField, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import FileBase from '../../FileBase/FileBase';
import { createPicture, updatePicture } from '../../../actions/pictures';

// TODO: validaton of fields for presence and lenght
const PictureForm = ({ currentId, setCurrentId, galleryId }) => {
  const [pictureData, setPictureData] = useState({ title: '', description: '', image: '' });
  const [fileName, setFileName]       = useState('');

  const picture  = useSelector((state) => (currentId ? state.pictures.pictures.find((picture) => picture.id === currentId) : null));
  const dispatch = useDispatch();
  const classes  = useStyles();

  useEffect(() => {
    if (picture) {
      setPictureData(picture);
      setFileName(picture.filename || '');
    }
  }, [picture]);

  const clear = () => {
    setCurrentId(0);
    setPictureData({ title: '', description: '', image: '' });
    setFileName('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      pictureData['gallery_id'] = galleryId;
      dispatch(createPicture(pictureData, fileName));
    } else {
      dispatch(updatePicture(currentId, pictureData, fileName));
    }
    clear();
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing a Picture` : 'Creating a Picture'}</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={pictureData.title} onChange={(e) => setPictureData({ ...pictureData, title: e.target.value })} />
        <TextField name="description" variant="outlined" label="Description" fullWidth multiline rows={4} value={pictureData.description} onChange={(e) => setPictureData({
          ...pictureData,
          description: e.target.value
        })} />
        <FileBase onDone={({ base64 }) => setPictureData({ ...pictureData, image: base64 })} fileName={fileName} setFileName={setFileName} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button className={classes.buttonClear} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default PictureForm;
