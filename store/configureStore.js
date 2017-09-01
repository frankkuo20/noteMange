import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import addCountReducer from '../reducer/addCountReducer'
import userListsReducer from '../reducer/userListsReducer'

const Reducers = combineReducers({
  addCountReducer, 
  userListsReducer
});

export default createStore(Reducers, applyMiddleware(thunkMiddleware))