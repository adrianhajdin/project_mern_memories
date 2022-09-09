import React from 'react';
import Post from './component/Post/Post';
import Form from './component/Form/Form';
import memories from './asset/memories.png';
import { useDispatch } from 'react-redux'; // useSelector
import { getPosts } from './reducers/postSlice'; // selectAllPosts
import api from './api/postsAxios';
import './index.css'
import Auth from './component/Auth/Auth';

//memories-project-361420
function App() {
  const dispatch = useDispatch();
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    const fetchPosts = async() => {
      try {
        // first we are getting a response from api
        // in the response it has the data object
        // which returning from the backend and then we get the data
        // the data is represent the posts
        const response = await api.get('/posts');
        // action is just type and payload
        setPosts(response.data)
      } catch (error) {
        console.log(`Client Error: ${error}`)
      }
    }
    fetchPosts();
    dispatch(getPosts(posts))
    // console.log(posts);

  });
  return (
    <div className='app'>
      <header className='header' >
        <h1>Memories</h1>
        <img className="img" src={memories} alt="memories" height="60px" />
        <div>
          <Auth/>
        </div>
      </header>
      <div className='section-container'>
        <section className='post-section'>
          <Post/>
        </section>
        <section className='form-section'>
          <Form/>
        </section>
      </div>
    </div>
  );
}

export default App;
