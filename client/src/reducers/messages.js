import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE_POST } from "../constants/actionTypes";

export default (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case LIKE_POST:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
            case UPDATE:
            console.log(posts[0]);
            console.log(action.payload);
            return posts.map(post => post._id === action.payload._id ? action.payload : post);
        case DELETE:
            return posts.filter(post => post._id !== action.payload);
        default:
            return posts;
    }
}

// id== 2;
