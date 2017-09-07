import React, { Component } from 'react'
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

import Layout from '../compoents/Layout'
import UserContainer from '../containers/UserContainer'

export default class User extends Component {
  static getInitialProps ({ query: { id } }) {
    return { id }
  }

  render() {
    const {id} = this.props
    return (
      <Provider store={configureStore}>
        <Layout title="user page">
          <UserContainer id={id} />
        </Layout>
      </Provider>
    )
  }
}
