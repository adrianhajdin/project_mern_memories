import { createSlice } from "@reduxjs/toolkit";
import actions from "../action/PostsAction";
const {getPostsAction, createPostsAction, updatePostsAction, getPinsAction, deletePostsAction} = actions;
const initialState = {
  postsData: [],
  pins: {
    id: 0,
    key: 0
  },
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  // there is 's' at the end of reducer. Keep that in mind.
  reducers: {
    getPosts: getPostsAction,
    createPosts: createPostsAction,
    updatePosts: updatePostsAction,
    deletePosts: deletePostsAction,
    getPins: getPinsAction,
  }
})
// from here it should be always "actions" not "action"
export const selectAllPosts = (state) => state.post.postsData;
export const selectId = (state) => state.post.pins;
export const { getPosts, createPosts, updatePosts, deletePosts, getPins} = postSlice.actions;
export default postSlice.reducer;