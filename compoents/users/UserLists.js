import { PureComponent } from 'react'
import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'
import User from './User'
import Button from 'react-md/lib/Buttons/Button'

export default class UserLists extends React.PureComponent {

  componentDidMount() {
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
        <Button raised primary onClick={getUserLists} label='refresh'/> 
        <Button raised secondary label='create' href='/userCreate' /> 
        <br /><br />
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
