import { connect } from 'react-redux'
import * as usersAction from '../actions/usersAction'
import { PureComponent } from 'react'

import UserForm from '../compoents/users/UserForm'


const mapStateToProps = (state, props) => {
  const { user, errorMsg, createSussess } = state.userUpdateReducer
  if (!user){
    return {}
  }
  return {
    errorMsg, 
    createSussess, 
    initialValues: {
      ...user
    } 
  }
};

const mapDispatchToProps = (dispatch, props) => {
  const { id } = props
  
  return {
    dispatch,
    userCreate: (data) => dispatch(usersAction.userUpdate(id, data)), 
    getUser: () => dispatch(usersAction.getUser(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);