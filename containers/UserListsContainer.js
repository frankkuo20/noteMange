import { connect } from 'react-redux'
import * as usersAction from '../actions/usersAction'
import { PureComponent } from 'react'

import UserLists from '../compoents/users/UserLists'


const mapStateToProps = (state) => {

  return {
    userLists: state.userListsReducer.userLists, 
    userLists_loading: state.userListsReducer.userLists_loading 
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    getUserLists: () => dispatch(usersAction.userLists())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLists);