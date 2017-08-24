import { createStore, combineReducers, applyMiddleware } from 'redux'; //

import addCountReducer from '../reducer/addCountReducer';


const Reducers = combineReducers({
  addCountReducer
});

export default createStore(Reducers)