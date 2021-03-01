import {
  AUTH_DONE,
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

const initialGalleries = { galleries: [], WIP: false, error: false };

const reducer = (galleries = initialGalleries, action) => {
  switch (action.type) {
  case FETCH_ALL_START:
    return { galleries: [...galleries.galleries], WIP: true, error: false };
  case FETCH_ALL_DONE:
    return { galleries: action.payload, WIP: false, error: false };
  case FETCH_ALL_ERROR:
    return { galleries: [], WIP: false, error: action.payload.message };

  case CREATE_START:
    return { galleries: [...galleries.galleries], WIP: true, error: false };
  case CREATE_DONE:
    return { galleries: [...galleries.galleries, action.payload], WIP: false };
  case CREATE_ERROR:
    return { galleries: [], WIP: false, error: action.payload.message };

  case DELETE_START:
    return { galleries: [...galleries.galleries], WIP: true, error: false };
  case DELETE_DONE:
    return { galleries: [...galleries.galleries.filter((gallery) => gallery.id !== action.payload)], WIP: false };
  case DELETE_ERROR:
    return { galleries: [], WIP: false, error: action.payload.message };

  case UPDATE_START:
    return { galleries: [...galleries.galleries], WIP: true, error: false };
  case UPDATE_DONE:
    return { galleries: [...galleries.galleries.map((gallery) => (gallery.id === action.payload.id ? action.payload : gallery))], WIP: false };
  case UPDATE_ERROR:
    return { galleries: [], WIP: false, error: action.payload.message };

  case LIKE:
    return galleries.galleries.map((gallery) => (gallery.id === action.payload.id ? action.payload : gallery));
  default:
    return galleries;
  }
};

export default reducer;
