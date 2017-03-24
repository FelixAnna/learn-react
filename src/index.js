import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import App from './App';
import homeReducer from './reducer/index.js';
import './index.css';


// Store
const store = createStore(homeReducer);

ReactDOM.render(
	<Provider store={store}>
	  <App />
	</Provider>,
  document.getElementById('root')
);
