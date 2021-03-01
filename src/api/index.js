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

export const getGalleries  = (userId) => API.get(`/galleries/${userId}`);
export const allGalleries  = () => API.get('/galleries');
export const createGallery = (newGallery) => API.post('/galleries', newGallery);
export const deleteGallery = (id) => API.delete(`/galleries/${id}`);
export const updateGallery = (id, updatedGallery) => API.patch(`/galleries/${id}`, updatedGallery);

export const signIn = (data) => API.post('/users/signIn', data);
export const signUp = (data) => API.post('/users/signUp', data);

export const likeGallery = (id) => API.patch(`${galleryUrl}/${id}/likeGallery`);
