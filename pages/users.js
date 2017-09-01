import { Provider } from 'react-redux';

import Layout from '../compoents/Layout.js'
import AddCount from '../containers/AddCount'
import configureStore from '../store/configureStore';

import UserListsContainer from '../containers/UserListsContainer'

export default () => {
  return (
      <Provider store={configureStore}>
        <Layout title="users page" content="test content">
          <UserListsContainer />
        </Layout>
      </Provider>
  )
}