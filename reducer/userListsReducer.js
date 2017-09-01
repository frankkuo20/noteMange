import { USER_LISTS, USER_LISTS_LOADING  } from '../constants/usersActionTypes'

const initialState = {
	userLists: [], 
	loading: false
}

const userListsReducer = (state = initialState, action) =>{
	
	switch(action.type){
		case USER_LISTS_LOADING:
			return Object.assign({}, state, {
				userLists_loading: true
			})
		case USER_LISTS:
			return Object.assign({}, state, {
				userLists: action.data, 
				userLists_loading: false
			})
		
		default:
			return state

    }
}

export default userListsReducer;