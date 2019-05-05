import axios from 'axios';
// import { ROOT_URL, getHeaders } from './index';
import { TICK_INDEX } from './types';
import { authError } from './auth';

const ROOT_URL = 'http://localhost:8888'

export function token() {
  let token = localStorage.getItem('token')
  if (token) {
    return
  }
  return 'token'
}

export function tickIndex () {
  return function (dispatch) {
    axios.get(`${ROOT_URL}/ticks`, { headers: { 'Content-Type': 'application/json' } })
      .then((response) => {
        dispatch({ type: TICK_INDEX, payload: response });
      })
      .catch((err) => {
        dispatch(authError(err.data.error));
      });
  };
}
