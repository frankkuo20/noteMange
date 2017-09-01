import { PureComponent } from 'react'
import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'
import User from './User'

export default class UserLists extends React.PureComponent {

  componentDidMount() {
    console.log('did');
    this.props.getUserLists()
  }

  render () {
    const { userLists, getUserLists, userLists_loading } = this.props
    if (userLists_loading){
      return (
        <div>
          loading...
        </div>
      )
    }
    return (
      <div>
        <button onClick={getUserLists}> refresh page </button>
        <div>
          { userLists.map( (user) => 
            <User key={user.id} {...user} />
          )}
        </div>
      </div>
    )
  }
}
// under is same
// function App1() {
//   return <Greeting firstName="Ben" lastName="Hector" />;
// }

// function App2() {
//   const props = {firstName: 'Ben', lastName: 'Hector'};
//   return <Greeting {...props} />;
// }
