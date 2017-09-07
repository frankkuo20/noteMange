import { connect } from 'react-redux'
import * as usersAction from '../actions/usersAction'
import { PureComponent } from 'react'

import UserForm from '../compoents/users/UserForm'


const mapStateToProps = (state) => {
  const { errorMsg, createSussess } = state.userCreateReducer
  
  return {
    errorMsg, 
    createSussess
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    userCreate: (data) => dispatch(usersAction.userCreate(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)