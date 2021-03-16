import {
  CREATE_PICTURE_DONE,
  CREATE_PICTURE_ERROR,
  CREATE_PICTURE_START,
  DELETE_PICTURE_DONE,
  DELETE_PICTURE_ERROR,
  DELETE_PICTURE_START,
  FETCH_ALL_PICTURES_DONE,
  FETCH_ALL_PICTURES_ERROR,
  FETCH_ALL_PICTURES_START,
  UPDATE_PICTURE_DONE,
  UPDATE_PICTURE_ERROR,
  UPDATE_PICTURE_START,
} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getPictures = (galleryId) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_ALL_PICTURES_START });
    const { data } = await api.getPictures(galleryId);

    dispatch({ type: FETCH_ALL_PICTURES_DONE, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_ALL_PICTURES_ERROR, payload: { message: error.message } });
    console.log(error.message);
  }
};

export const deletePicture = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PICTURE_START });
    await api.deletePicture(id);

    dispatch({ type: DELETE_PICTURE_DONE, payload: id });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: DELETE_PICTURE_ERROR, payload: { message: error.message } });
  }
};

export const createPicture = (picture, filename) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PICTURE_START });

    picture.filename = filename ?? '';
    const { data }   = await api.createPicture(picture);

    dispatch({ type: CREATE_PICTURE_DONE, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_PICTURE_ERROR, payload: { message: error.message } });
    console.log(error.message);
  }
};

export const updatePicture = (id, picture, filename) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PICTURE_START });

    picture.filename = filename ?? '';
    const { data }   = await api.updatePicture(id, picture);

    dispatch({ type: UPDATE_PICTURE_DONE, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_PICTURE_ERROR, payload: { message: error.message } });
    console.log(error.message);
  }
};

