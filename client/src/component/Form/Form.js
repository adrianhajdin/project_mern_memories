import React from 'react'
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPosts, selectAllPosts, selectId, updatePosts } from '../../reducers/postSlice';
import api from '../../api/postsAxios';
import './FormStyle.css'
const Form = () => {
  const dispatch = useDispatch();
  const postsData = useSelector(selectAllPosts);
  const pins = useSelector(selectId);
  let targetPost = postsData.find(thisPost => thisPost._id === pins.id);
  const [postData, setPostData] = React.useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  
  React.useEffect(() => {
    if(pins.id){
      setPostData(targetPost);
    }
  }, [pins]);

  async function Form_createPosts(){
    try {
      const response = await api.post('/posts', postData);
      const allPost = [...postData, response.data];
      dispatch(createPosts(allPost));
    } catch (error) {
      console.log(error)
    }
  }
  
  async function Form_updatePosts(){
    try {
      const response = await api.patch(`/posts/${pins.id}`, postData);
      dispatch(updatePosts(response.data));
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    if(pins.id){
      Form_updatePosts();
    } else {
      Form_createPosts();
    }
    clear();
  }

  const clear = () => {
    setPostData({creator: '', title: '', message: '', tags: '', selectedFile: ''});
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='creator'>Creator:</label>
        <input
          id='creator'
          type='text'
          required
          value={postData.creator}
          onChange={(event) => setPostData({
            ...postData, creator: event.target.value
          })}
        />
        <label htmlFor='title'>Title:</label>
        <input
          id='title'
          type='text'
          required
          value={postData.title}
          onChange={(event) => setPostData({
            ...postData, title: event.target.value
          })}
        />
        <label htmlFor='message'>Message:</label>
        <input
          id='message'
          type='text'
          required
          value={postData.message}
          onChange={(event) => setPostData({
            ...postData, message: event.target.value
          })}
        />
        <label htmlFor='tags'>Tags:</label>
        <input
          id='tags'
          type='text'
          required
          value={postData.tags}
          onChange={(event) => setPostData({
            ...postData, tags: event.target.value.split(',')
          })}
        />
        
        <div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({base64}) => setPostData({
              ...postData, selectedFile: base64
            })}
          />
        </div>
        <button type='submit'>Submit</button>
        <button onClick={clear}>Clear</button>
      </form>
    </div>
  )
}

export default Form