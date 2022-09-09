import { configureStore, compose, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import postSlice from "./postSlice";
const store = configureStore({
  // no 's' at the end of reducer. Keep that in mind.
  reducer: {
    post: postSlice,
  }
},
compose(applyMiddleware(thunk))
);

export default store;