import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware  } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'
import App from './App';
import homeReducer from './reducer/index.js';
import './index.css';


// Store
const store = createStore(homeReducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
	  <App />
	</Provider>,
  document.getElementById('root')
);
