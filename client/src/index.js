import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './history';
import store from './store';
import App from './components/app';
import './style/style.scss';
// import { AUTH_USER } from './actions/types';
import { loadState } from './localStorage';

const { localStorage } = window;
const token = localStorage.getItem('token');
const state = loadState();
// If we have a token, consider the user to be signed in
// if (token && state) {
//   // we need to update application state
//   store.dispatch({ type: AUTH_USER, payload: state.auth.user });
// }

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.querySelector('.container-fluid')
);
