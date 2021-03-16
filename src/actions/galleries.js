import {
  CREATE_GALLERY_DONE,
  CREATE_GALLERY_ERROR,
  CREATE_GALLERY_START,
  DELETE_GALLERY_DONE,
  DELETE_GALLERY_ERROR,
  DELETE_GALLERY_START,
  FETCH_ALL_GALLERIES_DONE,
  FETCH_ALL_GALLERIES_ERROR,
  FETCH_ALL_GALLERIES_START,
  LIKE,
  SEARCH_GALLERIES_DONE,
  SEARCH_GALLERIES_ERROR,
  SEARCH_GALLERIES_RESET,
  SEARCH_GALLERIES_START,
  UPDATE_GALLERY_DONE,
  UPDATE_GALLERY_ERROR,
  UPDATE_GALLERY_START
} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getGalleries = (userId) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_ALL_GALLERIES_START });
    const { data } = await api.getGalleries(userId);

    dispatch({ type: FETCH_ALL_GALLERIES_DONE, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_ALL_GALLERIES_ERROR, payload: { message: error.message } });
    console.log(error.message);
  }
};

export const getPublicGalleries = (pattern) => async (dispatch) => {
  if (pattern === undefined) {
    dispatch({ type: SEARCH_GALLERIES_RESET });
  }

  try {
    dispatch({ type: SEARCH_GALLERIES_START });

    const { data } = await api.getPublicGalleries(pattern);

    dispatch({ type: SEARCH_GALLERIES_DONE, payload: data });
  } catch (error) {
    dispatch({ type: SEARCH_GALLERIES_ERROR, payload: { message: error.message } });
    console.log(error.message);
  }
};

export const createGallery = (gallery, filename) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_GALLERY_START });

    gallery.filename = filename ?? '';
    const { data }   = await api.createGallery(gallery);

    dispatch({ type: CREATE_GALLERY_DONE, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_GALLERY_ERROR, payload: { message: error.message } });
    console.log(error.message);
  }
};

export const updateGallery = (id, gallery, filename) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_GALLERY_START });

    gallery.filename = filename ?? '';
    const { data }   = await api.updateGallery(id, gallery);

    dispatch({ type: UPDATE_GALLERY_DONE, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_GALLERY_ERROR, payload: { message: error.message } });
    console.log(error.message);
  }
};

export const likeGallery = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeGallery(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteGallery = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_GALLERY_START });
    await api.deleteGallery(id);

    dispatch({ type: DELETE_GALLERY_DONE, payload: id });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: DELETE_GALLERY_ERROR, payload: { message: error.message } });
  }
};
