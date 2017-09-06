import { 
	USER_LISTS, USER_LISTS_LOADING, 
	USER_UPDATE_SUCCESS
} from '../constants/usersActionTypes'

const initialState = {
	userLists: [], 
	loading: false, 
	deleteSuccess: false
}

const userListsReducer = (state = initialState, action) =>{
	
	switch(action.type){
		case USER_LISTS_LOADING:
			return Object.assign({}, state, {
				userLists_loading: true, 
				deleteSuccess: false
			})
		case USER_LISTS:
			return Object.assign({}, state, {
				userLists: action.data, 
				userLists_loading: false, 
				deleteSuccess: false
			})

		case USER_UPDATE_SUCCESS:
			return Object.assign({}, state, {
				deleteSuccess: true
			})
		default:
			return state

    }
}

export default userListsReducer;