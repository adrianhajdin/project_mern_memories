import React from 'react'
import moment from 'moment'
import api from '../../../api/postsAxios';
import { useDispatch, useSelector } from 'react-redux';
import { deletePosts, getPins, updatePosts, selectAllPosts } from '../../../reducers/postSlice'
const ChildPost = () => {
  const postData = useSelector(selectAllPosts);
  const dispatch = useDispatch();
  function editButton(id, key){
    dispatch(getPins({id, key}));
  }

  async function LikePost_onClick(id){
    try {
      const response = await api.patch(`/posts/${id}/likePost`);
      dispatch(updatePosts(response.data));
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async(id) => {
    try {
      // we don't need to pass any data that's why it's only await
      await api.delete(`/posts/${id}`);
      const remove_post = postData.filter(find_id => find_id._id === id);
      dispatch(deletePosts(remove_post));
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      {
        postData.map((posts, index) => (
          <div className='child-post-container' key={posts._id}>
            <button onClick={() => editButton(posts._id, index)}>edit</button>
            <img
              src={posts.selectedFile}
              alt=''
              height='100px'
            />
            <h1>Title: {posts.title}</h1>
            <p>{posts.message}</p>
            <h4>Author: {posts.creator}</h4>
            <h5>{moment(posts.createdAt).fromNow()}</h5>
            <h5>Tags: {posts.tags.map(tag => `#${tag} `)}</h5>
            <button onClick={() => LikePost_onClick(posts._id)}>Like<span> ({posts.likeCount})</span></button>
            <button onClick={() => handleDelete(posts._id)}>Delete</button>
          </div>
        ))
      }
  </>
  )
}

export default ChildPost


