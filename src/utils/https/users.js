import axios from 'axios';
import {API_URL} from '@env';

export const getUserById = (params, token) => {
  return axios.get(`${API_URL}/users/${params}`, {
    headers: {'x-access-token': `Bearer ${token}`},
  });
};

export const editUser = (id, body, token) => {
  return axios.patch(`${API_URL}/users/edit-user/${id}`, body, {
    headers: {'x-access-token': `Bearer ${token}`},
  });
};

export const getUsers = params => {
  return axios.get(`${API_URL}/users`, {params});
};
export const verifyToken = (body, token) => {
  return axios.post(`${API_URL}/users/verify-pin`, body, {
    headers: {'x-access-token': `Bearer ${token}`},
  });
};
