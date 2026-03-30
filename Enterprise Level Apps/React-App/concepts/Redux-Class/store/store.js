import { combineReducers, createStore } from 'redux'
import counterReducer from './counter-reducer'
import todoReducer from './todo-reducer'

const store = createStore(
  combineReducers({ counterReducer, todoReducer })
);

export default store;