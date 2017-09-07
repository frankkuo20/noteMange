import React, { Component } from 'react'

export default class UserDetail extends Component {
    componentDidMount() {
        this.props.getUser()
    }

    render() {
        const { user } = this.props
        if (!user){
            return (<div>loading...</div>)
        }
        return (
            <div>
                <div>username: {user.username}</div>
                
                <div>email: {user.email}</div>
            </div>
        )
    }
}
