import { connect } from 'react-redux'
import * as usersAction from '../actions/usersAction'
import { PureComponent } from 'react'

import UserDetail from '../compoents/users/UserDetail'


const mapStateToProps = (state) => {
  const { user } = state.userUpdateReducer
  
  return {
    user
  }
};

const mapDispatchToProps = (dispatch, props) => {
  const { id } = props
  return {
    dispatch,
    getUser: () => dispatch(usersAction.getUser(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail)