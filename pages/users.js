import { Provider } from 'react-redux';

import Layout from '../compoents/Layout.js'
import AddCount from '../containers/AddCount'
import configureStore from '../store/configureStore';

import UserLists from '../compoents/users/UserLists'

export default () => {
  return (
      <Provider store={configureStore}>
        <Layout title="users page" content="test content">
          <UserLists />
        </Layout>
      </Provider>
  )
}