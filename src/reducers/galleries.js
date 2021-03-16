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
  UPDATE_GALLERY_DONE,
  UPDATE_GALLERY_ERROR,
  UPDATE_GALLERY_START,
} from '../constants/actionTypes';

const initialGalleries = { galleries: [], WIP: false, error: false };

const reducer = (galleries = initialGalleries, action) => {
  switch (action.type) {
  case FETCH_ALL_GALLERIES_START:
    return { ...galleries, WIP: true };
  case FETCH_ALL_GALLERIES_DONE:
    return { galleries: action.payload, WIP: false, error: false };
  case FETCH_ALL_GALLERIES_ERROR:
    return { galleries: [], WIP: false, error: action.payload.message };

  case CREATE_GALLERY_START:
    return { ...galleries, WIP: true, error: false };
  case CREATE_GALLERY_DONE:
    return { galleries: [...galleries.galleries, action.payload], WIP: false };
  case CREATE_GALLERY_ERROR:
    return { galleries: [], WIP: false, error: action.payload.message };

  case DELETE_GALLERY_START:
    return { ...galleries, WIP: true, error: false };
  case DELETE_GALLERY_DONE:
    return { galleries: [...galleries.galleries.filter((gallery) => gallery.id !== action.payload)], WIP: false };
  case DELETE_GALLERY_ERROR:
    return { galleries: [], WIP: false, error: action.payload.message };

  case UPDATE_GALLERY_START:
    return { ...galleries, WIP: true, error: false };
  case UPDATE_GALLERY_DONE:
    return { galleries: [...galleries.galleries.map((gallery) => (gallery.id === action.payload.id ? action.payload : gallery))], WIP: false };
  case UPDATE_GALLERY_ERROR:
    return { galleries: [], WIP: false, error: action.payload.message };

  case LIKE:
    return galleries.galleries.map((gallery) => (gallery.id === action.payload.id ? action.payload : gallery));

  default:
    return galleries;
  }
};

export default reducer;
