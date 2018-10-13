import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import axios from 'axios';
import App from './App';
import reducers from './reducers';
// import registerServiceWorker from './registerServiceWorker';

// Dev helpers
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
  
    <App />
  </Provider>,
  document.getElementById('root')
);

console.log('OUR ENVIRONMENT IS: ', process.env.NODE_ENV);
// registerServiceWorker();
