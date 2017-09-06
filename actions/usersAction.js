import { USER_LISTS, 
  USER_LISTS_LOADING, 
  USER_CREEATE, 
  USER_CREATE_LOADING, 
  USER_CREEATE_SUCCESS, 
  USER_CREEATE_FAIL, 
  GET_USER_SUCCESS, 
  USER_UPDATE_SUCCESS, 
  USER_UPDATE_FAIL, 
  USER_UPDATE_LOADING
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

/**
 * 
 * 
 */

export const getUser_success = (data) => {
  return {
    type: GET_USER_SUCCESS, 
    data
  }
}

export const getUser = (id) => {
    return (dispatch) => {
      dispatch(userCreate_loading())
      fetch('http://localhost:8000/api/users/' + id +'/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then( (response) => {
        const { status } = response
        if (status==200){ // created
          response.json().then( (json) => {
            dispatch(getUser_success(json));
          })
        }else if (status==404){
          response.json().then( (json) => {
            
          })
        }
      })
    }
  
  };

  /**
   * 
   */

  export const userUpdate_loading = () => {
    return {
        type: USER_UPDATE_LOADING
    }
  }

  export const userUpdate_success = (data) => {
    return {
      type: USER_UPDATE_SUCCESS, 
      data
    }
  }
  
  export const userUpdate_fail = (data) => {
    return {
      type: USER_UPDATE_FAIL, 
      data
    }
  }
  
  export const userUpdate = (id, data) => {
  
    return (dispatch) => {
      dispatch(userUpdate_loading())
      fetch(`http://localhost:8000/api/users/${id}/`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(data)
      }).then( (response) => {
        const { status } = response
        if (status==200){ 
          response.json().then( (json) => {
            dispatch(userUpdate_success(json));            
          })
        }else if (status==400){
          response.json().then( (json) => {
            dispatch(userUpdate_fail(json));            
            
          })
        }else if (status==404){
          response.json().then( (json) => {
            
          })
        }
        
      });
    }
  
  };

  /**
   * 
   */
  export const userDelete_success = () => {
    return {
      type: USER_DELETE_SUCCESS
    }
  }
  
  export const userDelete_fail = (data) => {
    return {
      type: USER_DELETE_FAIL, 
      data
    }
  }
  
  export const userDelete = (id) => {
  
    return (dispatch) => {
      dispatch(userUpdate_loading())
      fetch(`http://localhost:8000/api/users/${id}/`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then( (response) => {
        const { status } = response
        if (status==200){ // created
          response.json().then( (json) => {
            dispatch(userDelete_success());            
          })
        }else if (status==404){
          response.json().then( (json) => {
            dispatch(userDelete_fail());            
            
          })
        }
        
      });
    }
  
  };
