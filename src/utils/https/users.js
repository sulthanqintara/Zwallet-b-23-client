import axios from 'axios';
import {API_URL} from '@env';

export const getUsers = params => {
  return axios.get(`${API_URL}/users`, {params});
};
