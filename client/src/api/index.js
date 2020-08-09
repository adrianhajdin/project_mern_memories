import axios from "axios";

const url = 'http://localhost:4000/posts/';

export const fetchPosts = () => axios.get(url);
export const fetchPost = (id) => axios.get(url + id);
export const createPost = (newRecord) => axios.post(url, newRecord);
export const updatePost = (id, updatedRecord) => axios.put(url + id, updatedRecord);
export const deletePost = (id) => axios.delete(url + id);
