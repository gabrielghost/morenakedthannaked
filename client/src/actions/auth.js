import axios from 'axios';
import { ROOT_URL } from './index';
import history from '../history';
import {
} from './types';

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
