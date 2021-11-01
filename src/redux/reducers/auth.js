import {ActionType} from 'redux-promise-middleware';

const initialState = {
  authInfo: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  isLogin: false,
  error: {},
  token: '',
  isLoading: false,
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
        isLoading: true,
      };
    case 'LOGIN'.concat('_', Rejected):
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        isLogin: false,
        error: action.payload,
        isLoading: false,
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
        isLoading: false,
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
    case 'TOPUP'.concat('_', Pending):
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'TOPUP'.concat('_', Rejected):
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        error: action.payload,
      };
    case 'TOPUP'.concat('_', Fulfilled):
      console.log('topup', action.payload);
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        authInfo: action.payload.data.result,
        isLogin: false,
      };
    case 'UPDATE_PROFILE'.concat('_', Pending):
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'UPDATE_PROFILE'.concat('_', Rejected):
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        error: action.payload,
      };
    case 'UPDATE_PROFILE'.concat('_', Fulfilled):
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        error: '',
        authInfo: action.payload.data.result[0],
        isLogin: false,
      };
    default:
      return prevState;
  }
};

export default authReducer;
