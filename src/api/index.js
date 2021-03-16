import axios from 'axios';

const baseURL = 'http://localhost:8000';

const API = axios.create({ baseURL });

API.interceptors.request.use((req) => {
  const token = window.localStorage.getItem('token');

  if (token) {
    // TODO: check expiration date
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

const galleryUrl = '/galleries';

export const getGalleries            = (userId) => API.get(`${galleryUrl}/${userId}`);
export const getPublicGalleries      = (pattern) => API.get(`${galleryUrl}/public/${pattern}`);
export const getGalleriesSuggestions = (data) => API.post(`${galleryUrl}/suggestions/`, data);
export const allGalleries            = () => API.get(`${galleryUrl}`);
export const createGallery           = (newGallery, filename) => API.post(`${galleryUrl}`, newGallery, filename);
export const deleteGallery           = (id) => API.delete(`${galleryUrl}/${id}`);
export const updateGallery           = (id, updatedGallery, filename) => API.patch(`${galleryUrl}/${id}`, updatedGallery, filename);

const pictureUrl = '/pictures';

export const getPictures   = (galleryId) => API.get(`${pictureUrl}/${galleryId}`);
export const createPicture = (newPicture, filename) => API.post(`${pictureUrl}`, newPicture, filename);
export const deletePicture = (id) => API.delete(`${pictureUrl}/${id}`);
export const updatePicture = (id, updatedPicture, filename) => API.patch(`${pictureUrl}/${id}`, updatedPicture, filename);

export const signIn = (data) => API.post('/users/signIn', data);
export const signUp = (data) => API.post('/users/signUp', data);

export const likeGallery = (id) => API.patch(`${galleryUrl}/${id}/likeGallery`);
