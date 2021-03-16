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
  UPDATE_PICTURE_START
} from '../constants/actionTypes';

const initialPictures = { pictures: [], WIP: false, error: false };

const reducer = (pictures = initialPictures, action) => {
  switch (action.type) {
  case FETCH_ALL_PICTURES_START:
    return { ...pictures, WIP: true, error: false };
  case FETCH_ALL_PICTURES_DONE:
    return { pictures: action.payload, WIP: false, error: false };
  case FETCH_ALL_PICTURES_ERROR:
    return { pictures: [], WIP: false, error: action.payload.message };

  case CREATE_PICTURE_START:
    return { ...pictures, WIP: true, error: false };
  case CREATE_PICTURE_DONE:
    return { pictures: [...pictures.pictures, action.payload], WIP: false };
  case CREATE_PICTURE_ERROR:
    return { pictures: [], WIP: false, error: action.payload.message };

  case DELETE_PICTURE_START:
    return { ...pictures, WIP: true, error: false };
  case DELETE_PICTURE_DONE:
    return { pictures: [...pictures.pictures.filter((picture) => picture.id !== action.payload)], WIP: false };
  case DELETE_PICTURE_ERROR:
    return { pictures: [], WIP: false, error: action.payload.message };

  case UPDATE_PICTURE_START:
    return { ...pictures, WIP: true, error: false };
  case UPDATE_PICTURE_DONE:
    return { pictures: [...pictures.pictures.map((picture) => (picture.id === action.payload.id ? action.payload : picture))], WIP: false };
  case UPDATE_PICTURE_ERROR:
    return { pictures: [], WIP: false, error: action.payload.message };

  default:
    return pictures;
  }
};

export default reducer;
