import axios from 'axios';

// get all the post (data) from the database from '/posts'
const api = axios.create({
  // always baseURL
  baseURL: 'http://localhost:5000',
})

// export const createPostsAxios = (newPost) => api.post('/posts', newPost);

export default api;