import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { reducer as formReducer } from 'redux-form'

import addCountReducer from '../reducer/addCountReducer'
import userListsReducer from '../reducer/userListsReducer'
import userCreateReducer from '../reducer/userCreateReducer'


const Reducers = combineReducers({
  addCountReducer, 
  userListsReducer, 
  userCreateReducer, 
  form: formReducer
});

export default createStore(Reducers, applyMiddleware(thunkMiddleware))