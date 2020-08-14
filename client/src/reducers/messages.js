import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE_POST } from "../constants/actionTypes";

export default (messages = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case LIKE_POST:
            return action.payload;
        case CREATE:
            return [...messages, action.payload];
        case UPDATE:
            return messages.map(message => message._id === action.payload._id ? action.payload : message);
        case DELETE:
            return messages.filter(message => message._id !== action.payload);
        default:
            return messages;
    }
}