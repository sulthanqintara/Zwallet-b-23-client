import {deleteLogout, postLogin} from '../../utils/https/auth';

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
