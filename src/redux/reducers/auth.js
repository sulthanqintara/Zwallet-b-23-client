import {ActionType} from 'redux-promise-middleware';

const initialState = {
  authInfo: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  isLogin: false,
  error: {},
  token: '',
};

const authReducer = (prevState = initialState, action) => {
  const {Pending, Fulfilled, Rejected} = ActionType;

  switch (action.type) {
    case 'LOGIN'.concat('_', Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
        error: '',
      };
    case 'LOGIN'.concat('_', Rejected):
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        isLogin: false,
        error: action.payload,
      };
    case 'LOGIN'.concat('_', Fulfilled):
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        isLogin: true,
        error: '',
        authInfo: action.payload.data.result.userInfo,
        token: action.payload.data.result.token,
      };
    case 'LOGOUT'.concat('_', Pending):
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'LOGOUT'.concat('_', Rejected):
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        error: action.payload,
      };
    case 'LOGOUT'.concat('_', Fulfilled):
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        authInfo: {},
        isLogin: false,
        token: '',
        error: '',
      };
    default:
      return prevState;
  }
};

export default authReducer;
