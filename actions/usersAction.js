import { USER_LISTS, USER_LISTS_LOADING } from '../constants/usersActionTypes'

export const userLists_loading = () => {
  return {
      type: USER_LISTS_LOADING
  }
}

export const  userLists_success = (data) => {
    
    return {
        type: USER_LISTS, 
        data
    }
}

export const userLists = () => {
    
    return (dispatch) => {
      dispatch(userLists_loading())
      fetch('http://localhost:8000/api/users/', {
        method: 'GET',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
      }).then(function (response) {
        return response.json()
      }).then(function (json) {
        dispatch(userLists_success(json));  
      });
    }
  
  };
  