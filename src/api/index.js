import axios from 'axios';

const url = 'http://localhost:8000';

const galleryUrl = `${url}/galleries`;

export const fetchGalleries = () => axios.get(galleryUrl);
export const createGallery = (newGallery) => axios.post(galleryUrl, newGallery);

export const likeGallery = (id) => axios.patch(`${galleryUrl}/${id}/likeGallery`);
export const updateGallery = (id, updatedGallery) => axios.patch(`${galleryUrl}/${id}`, updatedGallery);
export const deleteGallery = (id) => axios.delete(`${galleryUrl}/${id}`);
