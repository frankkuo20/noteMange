import React from 'react'
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import EditDialogColumn from 'react-md/lib/DataTables/EditDialogColumn';
import Button from 'react-md/lib/Buttons/Button';

class User extends React.PureComponent {
    
    render() {
        const { id, email, username } = this.props
        return (
          <TableRow>
            <TableColumn>{username}</TableColumn>
            <TableColumn>{email}</TableColumn>
            <TableColumn>
                <div className="btn-example">
                    <Button raised primary label="Edit" href={'/userUpdate?id='+id} />
                    <Button raised secondary label="Delete" />
                </div>
            </TableColumn>
          </TableRow>
        )
    }
}

export default User

