import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import cryptoData from './cryptoData';

const reducers = combineReducers({ cryptoData });
const middleWare = applyMiddleware( thunkMiddleware, createLogger());
const store = createStore( reducers, middleWare );

export default store;
export * from './cryptoData';