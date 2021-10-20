import axios from 'axios';
import {API_URL} from '@env';

export const getTransaction = (params, token) => {
  return axios.get(`${API_URL}/transaction`, {
    params,
    headers: {'x-access-token': `Bearer ${token}`},
  });
};
export const postTransaction = (body, token) => {
  return axios.post(`${API_URL}/transaction`, body, {
    headers: {'x-access-token': `Bearer ${token}`},
  });
};
