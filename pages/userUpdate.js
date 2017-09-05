import { Provider } from 'react-redux';

import Layout from '../compoents/Layout.js'
import AddCount from '../containers/AddCount'
import configureStore from '../store/configureStore';

import UserFormContainer from '../containers/UserFormContainer'
import Router from 'next/router'
import React from 'react'

class UserUpdate extends React.PureComponent {
  render(){

    return (
      <Provider store={configureStore}>
        <Layout title="user update page">
          <UserFormContainer />
        </Layout>
      </Provider>
  )
  }
} 

export default UserUpdate

// export default (props) => {
//   // console.log(props.url.query)
//   const { id } = props.url.query
  
//   if (!id){
//     Router.push('/users')
//   }
//   return (
//       <Provider store={configureStore}>
//         <Layout title="user update page">
//           <UserFormContainer />
//         </Layout>
//       </Provider>
//   )
// }