import { CREATE_DONE, DELETE, FETCH_ALL_DONE, FETCH_ALL_START, LIKE, UPDATE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getGalleries = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_ALL_START });
    const { data } = await api.fetchGalleries();

    dispatch({ type: FETCH_ALL_DONE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createGallery = (gallery) => async (dispatch) => {
  try {
    const { data } = await api.createGallery(gallery);

    dispatch({ type: CREATE_DONE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateGallery = (id, gallery) => async (dispatch) => {
  try {
    const { data } = await api.updateGallery(id, gallery);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
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
    await api.deleteGallery(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
