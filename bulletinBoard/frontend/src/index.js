import App from './components/App'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './components/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));
