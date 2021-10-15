// import {ActionType} from 'redux-promise-middleware';

const defaultState = {
  authInfo: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  isLogin: false,
  error: {},
  token: '',
};

const authReducer = (prevstate = defaultState, action) => {
  //   const {Pending, Fulfilled, Rejected} = ActionType;
};
export default authReducer;
