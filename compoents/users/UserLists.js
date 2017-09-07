import { PureComponent } from 'react'
import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'
import User from './User'
import Button from 'react-md/lib/Buttons/Button'
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableRow  from 'react-md/lib/DataTables/TableRow';
import TableColumn  from 'react-md/lib/DataTables/TableColumn';
import TablePagination from 'react-md/lib/DataTables/TablePagination';
import FontIcon from 'react-md/lib/FontIcons';


export default class UserLists extends React.PureComponent {
  
  componentDidMount() {
    this.props.getUserLists()
  }
  

  render () {
    
    const { userLists, getUserLists, userLists_loading, 
      userDelete
    } = this.props
    
    if (userLists_loading){
      return (
        <div>
          loading...
        </div>
      )
    }
    return (
      <div>
        <Button raised primary onClick={() => getUserLists()} label='refresh' iconClassName="fa fa-refresh" /> 
        <Button raised secondary label='create' href='/userCreate' iconClassName="fa fa-plus" /> 
        <br /><br />
        <DataTable plain baseId="users">
          <TableHeader>
            <TableRow>
              <TableColumn>Username</TableColumn>
              <TableColumn>Email</TableColumn>
              <TableColumn></TableColumn>
            </TableRow>
          </TableHeader>

          <TableBody>
            { userLists.map( (user) => 
              <User key={user.id} {...user} userDelete={userDelete} 
              getUserLists = {getUserLists}
              />
            )}
          </TableBody>
          {/* <TablePagination onPagination={this._handlePagination} rows={rows} /> */}

        </DataTable>

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



