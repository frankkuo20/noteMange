import {
	USER_CREEATE, USER_CREEATE_LOADING,
	USER_CREEATE_SUCCESS, USER_CREEATE_FAIL
} from '../constants/usersActionTypes'

const initialState = {
	loading: false,
	errorMsg: {}, 
	createSussess: false
}

const userCreateReducer = (state = initialState, action) => {

	switch (action.type) {
		case USER_CREEATE_LOADING:
			return Object.assign({}, state, {
				userLists_loading: true
			})
		case USER_CREEATE:
			return Object.assign({}, state, {
				data: action.data,
				userLists_loading: false
			})

		case USER_CREEATE_SUCCESS:
			return Object.assign({}, state, {
				errorMsg: {},
				createSussess: true
			})
		case USER_CREEATE_FAIL:
			return Object.assign({}, state, {
				errorMsg: action.data
			})
		default:
			return state

	}
}

export default userCreateReducer;