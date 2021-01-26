import { CREATE_DONE, CREATE_START, DELETE, FETCH_ALL_DONE, FETCH_ALL_START, LIKE, UPDATE } from '../constants/actionTypes';

const reducer = (galleries = { galleries: [], WIP: false, error: false }, action) => {
  switch (action.type) {
  case FETCH_ALL_START:
    return { galleries: [...galleries.galleries], WIP: true };
  case FETCH_ALL_DONE:
    return { galleries: action.payload, WIP: false };
  case CREATE_START:
    return { galleries: [...galleries.galleries], WIP: true };
  case CREATE_DONE:
    return { galleries: [...galleries.galleries, action.payload], WIP: false };

  case LIKE:
    return galleries.galleries.map((gallery) => (gallery.id === action.payload.id ? action.payload : gallery));
  case UPDATE:
    return galleries.galleries.map((gallery) => (gallery.id === action.payload.id ? action.payload : gallery));
  case DELETE:
    return galleries.galleries.filter((gallery) => gallery.id !== action.payload);
  default:
    return galleries;
  }
};

export default reducer;
