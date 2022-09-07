import React from 'react'
import ChildPost from './Child Post/ChildPost';
import './PostStyle.css'
const Post = () => {
  return (
    <div className='post-container'>
      <h1>Post</h1>
      <ChildPost/>
    </div>
  )
}

export default Post