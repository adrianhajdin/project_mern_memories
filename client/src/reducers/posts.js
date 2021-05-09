import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_POST, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (posts = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...posts, isLoading: true };
    case 'END_LOADING':
      return { ...posts, isLoading: false };
    case FETCH_ALL:
      return {
        ...posts,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
      return { ...posts, posts: action.payload.data };
    case FETCH_POST:
      return { ...posts, post: action.payload.post };
    case LIKE:
      return { ...posts, posts: posts.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case CREATE:
      return { ...posts, posts: [...posts.posts, action.payload] };
    case UPDATE:
      return { ...posts, posts: posts.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case DELETE:
      return { ...posts, posts: posts.posts.filter((post) => post._id !== action.payload) };
    default:
      return { ...posts, posts };
  }
};

