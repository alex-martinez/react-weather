/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import rootReducer from './reducers/index';
import App from './containers/App';
import './assets/index.css';

// const store = createStore( allReducers );
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(rootReducer) }>
    <App />
  </Provider>,
  document.getElementById('root')
);
