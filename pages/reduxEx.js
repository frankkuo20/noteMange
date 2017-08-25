import { Provider } from 'react-redux';

import Layout from '../compoents/Layout.js'
import AddCount from '../containers/AddCount'
import configureStore from '../store/configureStore';


export default () => {
  return (
      <Layout title="redux example page" content="sadf">
        <Provider store={configureStore}>
          <AddCount />
        </Provider>
      </Layout>
  )
}