import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getPosts = () => dispatch => {
    api.fetchPosts()
        .then(res => dispatch({ type: FETCH_ALL, payload: res.data }))
        .catch(err => console.log(err))
}

export const createPost = (data) => dispatch => {
    console.log(data);
    api.createPost(data)
        .then(res =>{
            dispatch({ type: CREATE, payload: res.data })
        })
        .catch(err => console.log(err))
}

export const updatePost = (id, data) => dispatch => {
    api.updatePost(id,data)
        .then(res => {
            dispatch({ type: UPDATE, payload: res.data })
        })
        .catch(err => console.log(err))
}

export const deletePost = (id, ) => dispatch => {
    api.deletePost(id)
        .then(res =>{
            dispatch({ type: DELETE, payload: id })
        })
        .catch(err => console.log(err))
}