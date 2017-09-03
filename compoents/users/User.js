import React from 'react'
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import EditDialogColumn from 'react-md/lib/DataTables/EditDialogColumn';

class User extends React.PureComponent {
    
    render() {
        const { id, email, username} = this.props
        return (
            <TableRow>
            <TableColumn>{username}</TableColumn>
            
        </TableRow>
        )
    }
}

export default User


{/* <TableColumn>{email}</TableColumn>
                <EditDialogColumn
                label={inline ? null : 'Add some comment'}
                placeholder="Add some comment"
                maxLength={inline ? null : 140}
                title={inline ? null : 'Add some comment'}
                large={inline ? null : large}
                okOnOutsideClick={okOnOutsideClick}
                inline={inline}
                /> */}