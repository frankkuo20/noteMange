import { Provider } from 'react-redux';

import Layout from '../compoents/Layout.js'
import AddCount from '../containers/AddCount'
import configureStore from '../store/configureStore';

import UserListsContainer from '../containers/UserListsContainer'
import React from 'react'

class Users extends React.PureComponent{

  render(){
    return (
      <Provider store={configureStore}>
        <Layout title="users page">
          <UserListsContainer />
        </Layout>
      </Provider>
    )
  }
}

export default Users