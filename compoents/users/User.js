import React from 'react'

class User extends React.Component {
    
    render() {
        const { id, email, username} = this.props
        return (
            <div>
                {id}, {username}, {email}, 
            </div>
        )
    }
}

export default User
    