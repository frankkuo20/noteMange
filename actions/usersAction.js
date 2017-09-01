import { USER_LISTS, 
  USER_LISTS_LOADING, 
  USER_CREEATE, 
  USER_CREATE_LOADING, 
  USER_CREEATE_SUCCESS, 
  USER_CREEATE_FAIL
} from '../constants/usersActionTypes'

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
    }).then((response) => {
      return response.json()
    }).then((json) => {
      dispatch(userLists_success(json));  
    });
  }
  
};
/**
 * 
 */
export const userCreate_loading = () => {
  return {
      type: USER_CREATE_LOADING
  }
}

export const userCreate_success = (data) => {
  return {
    type: USER_CREEATE_SUCCESS, 
    data
  }
}

export const userCreate_fail = (data) => {
  return {
    type: USER_CREEATE_FAIL, 
    data
  }
}

export const userCreate = (data) => {

  return (dispatch) => {
    dispatch(userCreate_loading())
    fetch('http://localhost:8000/api/users/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(data)
    }).then( (response) => {
      const { status } = response
      if (status==201){ // created
        response.json().then( (json) => {
          dispatch(userCreate_success(json));            
        })
      }else if (status==400){
        response.json().then( (json) => {
          dispatch(userCreate_fail(json));            
          
        })
      }
      
    });
  }

};