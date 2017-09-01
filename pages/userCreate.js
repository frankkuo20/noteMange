import { Provider } from 'react-redux';

import Layout from '../compoents/Layout.js'
import AddCount from '../containers/AddCount'
import configureStore from '../store/configureStore';

import UserFormContainer from '../containers/UserFormContainer'

export default () => {
  return (
      <Provider store={configureStore}>
        <Layout title="users create page">
          <UserFormContainer />
        </Layout>
      </Provider>
  )
}