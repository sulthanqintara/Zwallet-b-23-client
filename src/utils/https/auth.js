import axios from 'axios';
import {API_URL} from '@env';

export const postLogin = body => {
  return axios.post(`${API_URL}/auth/login`, body);
};

export const deleteLogout = token => {
  return axios.delete(`${API_URL}/auth/logout`, {token: token});
};

export const postRegister = body => {
  return axios.post(`${API_URL}/auth/register`, body);
};

export const updatePassword = (id, body, token) => {
  return axios.patch(`${API_URL}/users/update-password/${id}`, body, {
    headers: {'x-access-token': `Bearer ${token}`},
  });
};
