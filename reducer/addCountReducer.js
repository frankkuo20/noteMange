
import { ADD_COUNT, SUB_COUNT } from '../constants/actionTypes'

const initialState = {
	payload:1
}

const addCountReducer = (state = initialState, action) =>{
	
	switch(action.type){
				
		case ADD_COUNT:
			return Object.assign({}, state, {
				payload: state.payload + 1
			})
		case SUB_COUNT:
			return Object.assign({}, state, {
				payload: state.payload - 1
			})
		default:
			return state

    }
}

export default addCountReducer;