import {
  CREATE_DONE,
  CREATE_ERROR,
  CREATE_START,
  DELETE_DONE,
  DELETE_ERROR,
  DELETE_START,
  FETCH_ALL_DONE,
  FETCH_ALL_ERROR,
  FETCH_ALL_START,
  LIKE,
  UPDATE_DONE,
  UPDATE_ERROR,
  UPDATE_START
} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getGalleries = (userId) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_ALL_START });
    const { data } = await api.getGalleries(userId);

    dispatch({ type: FETCH_ALL_DONE, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_ALL_ERROR, payload: { message: error.message } });
    console.log(error.message);
  }
};

export const createGallery = (gallery) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_START });
    const { data } = await api.createGallery(gallery);

    dispatch({ type: CREATE_DONE, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_ERROR, payload: { message: error.message } });
    console.log(error.message);
  }
};

export const updateGallery = (id, gallery) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_START });
    const { data } = await api.updateGallery(id, gallery);

    dispatch({ type: UPDATE_DONE, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_ERROR, payload: { message: error.message } });
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
    dispatch({ type: DELETE_START });
    await api.deleteGallery(id);

    dispatch({ type: DELETE_DONE, payload: id });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: DELETE_ERROR, payload: { message: error.message } });
  }
};
