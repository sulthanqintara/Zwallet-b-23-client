import {deleteLogout, postLogin} from '../../utils/https/auth';
import {editUser} from '../../utils/https/users';
import {postTransaction} from '../../utils/https/transaction';

export const loginAction = body => {
  return {
    type: 'LOGIN',
    payload: postLogin(body),
  };
};

export const logoutAction = token => {
  return {
    type: 'LOGOUT',
    payload: deleteLogout(token),
  };
};

export const updateUserAction = (id, body, token) => {
  return {
    type: 'UPDATE_PROFILE',
    payload: editUser(id, body, token),
  };
};

export const topUpAction = (body, token) => {
  return {
    type: 'TOPUP',
    payload: postTransaction(body, token),
  };
};
