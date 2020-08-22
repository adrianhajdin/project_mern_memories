import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE_POST } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getPosts = () => dispatch => {
    api.fetchPosts()
        .then(res => dispatch({ type: FETCH_ALL, payload: res.data }))
        .catch(err => console.log(err))
}

export const createPost = (data) => dispatch => {
    api.createPost(data)
        .then(res => dispatch({ type: CREATE, payload: res.data }))
        .catch(err => console.log(err))
}

export const updatePost = (id, data) => dispatch => {
    api.updatePost(id, data)
    .then(res => {
            dispatch({ type: UPDATE, payload: res.data })
        })
        .catch(err => console.log(err))
}

export const likePost = (id) => dispatch => {
    api.likePost(id)
        .then((res) => dispatch({ type: LIKE_POST, payload: res.data }))
        .catch(err => console.log(err))

        // getPosts();
}

export const deletePost = (id, ) => dispatch => {
    api.deletePost(id)
        .then(res => dispatch({ type: DELETE, payload: id }))
        .catch(err => console.log(err))
}