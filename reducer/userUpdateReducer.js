import {
	GET_USER_SUCCESS, 
	USER_UPDATE_LOADING, 
	USER_UPDATE_SUCCESS, 
	USER_UPDATE_FAIL
} from '../constants/usersActionTypes'

const initialState = {
	data:{}
}

const userUpdateReducer = (state = initialState, action) => {

	switch (action.type) {
		case USER_UPDATE_LOADING:
		return Object.assign({}, state, {
			userLists_loading: true
		})
		case GET_USER_SUCCESS:
			return Object.assign({}, state, {
				user: action.data
			})
		case USER_UPDATE_SUCCESS:
			return Object.assign({}, state, {
				errorMsg: {},
				createSussess: true
			})
		case USER_UPDATE_FAIL:
			return Object.assign({}, state, {
				errorMsg: action.data
			})
		default:
			return state

	}
}

export default userUpdateReducer;