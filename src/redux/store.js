import {applyMiddleware, combineReducers, createStore} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rpm from 'redux-promise-middleware';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import authReducer from './reducers/auth';

const persistAuth = {
  key: 'auth',
  storage: AsyncStorage,
};
const logger = createLogger();

const reducers = combineReducers({
  auth: persistReducer(persistAuth, authReducer),
});

const enhancers = applyMiddleware(rpm, logger);

export default () => {
  const reduxStore = createStore(reducers, enhancers);
  const persist = persistStore(reduxStore);
  return {reduxStore, persist};
};
