import React from 'react'
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import EditDialogColumn from 'react-md/lib/DataTables/EditDialogColumn';
import Button from 'react-md/lib/Buttons/Button';
import Dialog from 'react-md/lib/Dialogs';
import Router from 'next/router'

class User extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { visible: false };
        this.goToPage = this.goToPage.bind(this)
    }

    openDialog = () => {
        this.setState({ visible: true });
    }

    closeDialog = () => {
        this.setState({ visible: false });
    }

    confirmDialog = (id) => {
        this.props.userDelete(id)
        this.closeDialog()
    }
    goToPage = (id) => {
        // Router.push(`/userUpdate/${id}`)
    }
    render() {
        const { visible } = this.state

        const { 
            id, email, username
        } = this.props

        return (
            <TableRow >
                <TableColumn><a href={'/user/'+id}>{username}</a></TableColumn>
                <TableColumn>{email}</TableColumn>
                <TableColumn>
                    <Button raised primary label="Edit" href={'/userUpdate/' + id} />
                    <Button raised secondary onClick={this.openDialog} label="Delete" />
                    <Dialog
                        id="deleteConfirm"
                        visible={visible}
                        title={"Confirm Delete?" + username}
                        onHide={this.closeDialog}
                        aria-labelledby="deleteConfirm"
                        modal
                        actions={[{
                            onClick: () => this.confirmDialog(id),
                            primary: true,
                            label: 'Confirm',
                        }, {
                            onClick: this.closeDialog,
                            primary: true,
                            label: 'Cancel',
                        }]}
                    />
                </TableColumn>

            </TableRow>

        )
    }
}

export default User

