import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { PhotoCamera, PhotoCameraOutlined } from '@material-ui/icons';

import useStyles from './styles';

const FileBase = ({ fileName, setFileName, accept = 'image/*', onDone }) => {
  const classes = useStyles();

  const onChange = (e) => {
    const files  = e.target.files;
    const file   = files[0];
    const reader = new FileReader();

    // Convert the file to base64 text
    reader.readAsDataURL(file);
    reader.onload = () => {
      // Make a fileInfo Object
      const fileInfo = {
        name: file.name,
        type: file.type,
        size: Math.round(file.size / 1000) + ' kB',
        base64: reader.result,
        file: file,
      };
      setFileName(file.name);
      // Apply Callback function
      onDone(fileInfo);
    };
  };

  return (
    <div className={classes.root}>
      <input
        id="icon-button-file"
        type="file"
        className={classes.fileInput}
        accept={accept}
        multiple={false}
        onChange={onChange}
      />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          {fileName === "" ? <PhotoCameraOutlined /> : <PhotoCamera />}
        </IconButton>
        <span>{fileName}</span>
      </label>
    </div>
  );
};

FileBase.propTypes = {
  onDone: PropTypes.func.isRequired,
  fileName: PropTypes.string.isRequired,
  setFileName: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
  accept: PropTypes.string,
};

export default FileBase;
