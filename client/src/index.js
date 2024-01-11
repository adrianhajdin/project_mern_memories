import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Install "npm install @reduxjs/toolkit" on server side
import { configureStore } from "@reduxjs/toolkit";
import { reducers } from './reducers';
import App from './App';
import './index.css';

const store = configureStore({ reducer: reducers });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
